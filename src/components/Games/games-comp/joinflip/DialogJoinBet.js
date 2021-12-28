import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import "./style.css";
import { Avatar, Grid, Typography } from '@mui/material';
import babytoshiPic from "../../../../images/currencies/babyToshi.png";
import babytoshiBisPic from "../../../../images/currencies/babyToshiBis.png";
import CloseIcon from '@mui/icons-material/Close';
import {getValueFlip, convertNumberToCurrency} from "../../../../methods/Methods";
import JoinFlip from "./JoinFlip";
import { getBabytoshiAddress } from '../../../../abis/BABYTOSHI';

export default function DialogJoinBet(props) {
    const theme = useTheme();
    const { ethereum, player, openAnimation, closeDialog, resultFlip, selectedFlip, updateSelectedFlip, updateFlips, } = props;
    const [selectedSide, setSelectedSide] = useState(true);
    const [resultSide, setResultSide] = useState(true);

    const [selectedPic, setSelectedPic] = useState(babytoshiBisPic);
    const [canCloseDialog, setCanCloseDialog] = useState(true);

    const [valueFlip, setValueFlip] = useState(0);


    const coinDivHead = useRef();
    const coinDivTail = useRef();
    const refTitle = useRef();
    const refTitleFinish = useRef();
    
    const gridFlip = useRef();
    const gridResult = useRef();

    const updateSelectedSide = (_side) => {
        setSelectedSide(_side);
    };

    useEffect(()=>{
        init();
        async function init(){
            if( openAnimation ){
                if( coinDivHead.current && coinDivTail.current && gridResult.current ){
                    refTitle.current.style.display = "block";
                    refTitleFinish.current.style.display = "none";
                    
                    gridFlip.current.style.display = 'block';
                    gridResult.current.style.display = 'none';
                    
                    if( selectedFlip ){
                        setValueFlip(await getValueFlip(selectedFlip.key));
                    }
                    
                    if( selectedFlip && selectedFlip.finished ){
                        if( selectedFlip.currency.key !== getBabytoshiAddress() ){
                            setSelectedPic(selectedFlip.currency.image);
                        }
                        setCanCloseDialog(false);
                        let _resultSide = selectedFlip.commitment1.toLowerCase() === selectedFlip.commitment2.toLowerCase() ? selectedSide : !selectedSide;
                        setResultSide(_resultSide);
                        
                        if( _resultSide ){
                            coinDivHead.current.className = "flipHead";
                            coinDivHead.current.style.display = 'block';
                            coinDivTail.current.style.display = 'none';
                        }else{
                            coinDivTail.current.className = "flipHead";
                            coinDivTail.current.style.display = 'block';
                            coinDivHead.current.style.display = 'none';
             
                        }
                        
                        setTimeout(()=>{
                            coinDivHead.current.className = "";
                            coinDivTail.current.className = "";
                            refTitle.current.style.display = "none";
                            refTitleFinish.current.style.display = "block";
                            gridFlip.current.style.display = 'none';
                            gridResult.current.style.display = 'block';
                            setCanCloseDialog(true);
                        }, 6000);
                    } 
                }
            }
        }
    }, [openAnimation, resultFlip, selectedFlip]);

   

    return (
        <Dialog
          className="text-center"
          sx={{ '& .MuiDialog-paper': { minWidth:400 }, borderRadius:20 }}
          keepMounted
          open={openAnimation}
          width='100%'
          p={2}
          elevation={5}
        >
            <Grid container columns={{xs:12, sm:12, md:12}} p={1} style={{display:canCloseDialog ? 'block' : 'none'}} onClick={closeDialog}> 
                <Grid container item xs sm md justifyContent='flex-end' alignItems="flex-start">
                    <Avatar style={{margin:10, cursor:'pointer', backgroundColor: theme.palette.primary.main}} onClick={closeDialog}>
                        <CloseIcon fontSize="small" color="text.primary" />
                    </Avatar>
                
                </Grid>
            </Grid>
          <DialogContent mt={0} >

        {
            selectedFlip && !selectedFlip.finished ? 
            <div>
                <Grid container columns={{xs:12, sm:12, md:12}} mb={2}> 
                    <Grid container item xs={12} sm={12} md={12} justifyContent="center" alignItems="center"  mb={2}> 
                        <Typography variant="h2" fontWeight={900} fontSize={30}>{"JOIN FLIP"}</Typography>
                    </Grid>
                </Grid>
                    <JoinFlip setCanCloseDialog={setCanCloseDialog} ethereum={ethereum} player={player} updateFlips={updateFlips} selectedFlip={selectedFlip} updateSelectedFlip={updateSelectedFlip} selectedSide={selectedSide} updateSelectedSide={updateSelectedSide} openAnimation={openAnimation} closeDialog={closeDialog} resultFlip={resultFlip}  />
            </div>
            :
            <div>
                <Grid container columns={{xs:12, sm:12, md:12}} mb={2}> 
                    <Grid container item xs={12} sm={12} md={12} justifyContent="center" alignItems="center"  mb={2}> 
                        <Typography ref={refTitle} variant="h2" fontWeight={900} fontSize={30}>{"Coin is flipping ..."}</Typography>
                        <Typography ref={refTitleFinish} variant="h2" fontWeight={900} fontSize={30} >{(resultSide ? "Head" : "Tail") + " wins !!!"}</Typography>
                    </Grid>
                </Grid>

            <Grid ref={coinDivHead} container columns={{xs:12, sm:12, md:12}}  className="" id="coinHead"  style={{textAlign:'center',display:'none'}}>
                <Grid className="side head" style={{background:theme.palette.primary.main}}><img alt="head" loading='lazy' src={babytoshiPic}  /></Grid>
                <Grid className="side tail" style={{background:theme.palette.secondary.main}}><img alt="tail" loading='lazy' src={selectedPic}  /></Grid>
            </Grid>

            <Grid ref={coinDivTail} container columns={{xs:12, sm:12, md:12}}   className="" id="coinTail"  style={{textAlign:'center', display:'none'}}>
                <Grid className="side head" style={{background:theme.palette.secondary.main}}><img alt="head" loading='lazy' src={selectedPic}  /></Grid>
                <Grid className="side tail" style={{background:theme.palette.primary.main}}><img alt="tail" loading='lazy' src={babytoshiPic}  /></Grid>
            </Grid>

            <Grid container columns={{xs:12, sm:12, md:12}}  mb={2}> 
                <Grid container item xs={12} sm={12} md={12} justifyContent='center' direction="column">
                    <Typography mb={1} sx={{color:theme.palette.text.primary}}><strong>Your choice : </strong>{selectedSide ? "Head" : "Tail"}</Typography>
                </Grid>
            </Grid>

            <Grid ref={gridFlip} container columns={{xs:12, sm:12, md:12}}  mb={2}> 
                <Grid container item xs={12} sm={12} md={12} justifyContent='center' direction="column">
                    <Typography fontWeight={'bold'} sx={{color:theme.palette.text.primary}}>{"You may win"}</Typography>
                    <Typography fontWeight={'bold'} sx={{color:theme.palette.orange.main}}>{selectedFlip ? selectedFlip.amount : 0} {selectedFlip ? selectedFlip.currency.symbol : ""}</Typography>
                    <Typography fontWeight={'bold'} sx={{color:theme.palette.success.main}}>{convertNumberToCurrency(valueFlip, 2)}</Typography>
                </Grid>
            </Grid>

            <Grid ref={gridResult} style={{display:'none'}}>
                <Grid container columns={{xs:12, sm:12, md:12}}  mb={2} > 
                    <Grid container item xs={12} sm={12} md={12} justifyContent='center' direction="column">
                        <Typography fontWeight={'bold'} sx={{color:theme.palette.blue.main}}>{resultSide === selectedSide ? "Congratulations" : "Sorry you loose !"}</Typography>
                        <Typography fontWeight={'bold'} sx={{color:theme.palette.blue.main, display:resultSide === selectedSide ? 'block' : 'none'}}>{"You win"}</Typography>
                        <Typography fontWeight={'bold'} sx={{color:theme.palette.orange.main, display:resultSide === selectedSide ? 'block' : 'none'}}>{selectedFlip ? selectedFlip.amount : 0} {selectedFlip ? selectedFlip.currency.symbol : ""}</Typography>
                        <Typography fontWeight={'bold'} sx={{color:theme.palette.success.main, display:resultSide === selectedSide ? 'block' : 'none'}}>{convertNumberToCurrency(valueFlip, 2)}</Typography>
                        <Button onClick={closeDialog} color="orange" variant="contained" sx={{display:resultSide !== selectedSide ? 'block' : 'none', marginTop:3}}>Try Again</Button>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        }
          </DialogContent>
        </Dialog>
      );
}
