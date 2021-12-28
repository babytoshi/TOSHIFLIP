import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";

import {getFlipByKey, joinFlip, shortAddress, approveCurrency, TEXT_ADDRESS_ZERO, DEFAULT_CURRENCY, getAllowanceOf, convertFromWei, formatNumber} from "../../../../methods/Methods";
import { Grid, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ApprovalIcon from '@mui/icons-material/Approval';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

const useStyles = makeStyles( () => ({
    root: {
        textAlign: "center",
        padding: 30,
        marginTop: 20,
    },
    confirmCreateFlipBtn : {
        marginTop: 20,
        border: 'none',
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom:10,
        fontFamily: "Montserrat",
        fontWeight: 900,
        fontSize: 20,
        cursor: 'pointer',
    }
}));

export default function JoinFlip(props){
    const theme = useTheme();
    const classes = useStyles();
    const { setCanCloseDialog, ethereum, player, selectedFlip, updateSelectedFlip, updateFlips, selectedSide, updateSelectedSide, } = props;
    const [allowanceOf, setAllowanceOf] = useState(0);
    const [loadingButton, setLoadingButton] = useState(false);

    useEffect(() => {
        init();
        async function init(){
        await updateAllowance(selectedFlip ? selectedFlip.currency : DEFAULT_CURRENCY);
        }
    }, [player, selectedFlip]);

    async function updateAllowance(_currency){
        let allowance = await getAllowanceOf(_currency.address, player);
        allowance = parseFloat(convertFromWei(allowance, _currency.ether));
        setAllowanceOf(allowance);
    }

    const onJoinFlip = async () => {
        if( ethereum && selectedFlip ){
            if( allowanceOf < parseFloat(convertFromWei(selectedFlip.amount, selectedFlip.currency.ether)) ){
                setLoadingButton(true);
                setCanCloseDialog(false);
                let approved = await approveFlip();

                if( approved===true ){
                    setLoadingButton(true);
                    setCanCloseDialog(false);
                    await confirmFlip().then( ()=>{
                        setLoadingButton(false);
                        setCanCloseDialog(true);
                    }).catch(()=>{
                        setLoadingButton(false);
                        setCanCloseDialog(true);
                    });
                    
                }else{
                    setLoadingButton(false);
                    setCanCloseDialog(true);
                }
            }else{
                setLoadingButton(true);
                setCanCloseDialog(false);
                await confirmFlip().then( ()=>{
                    setLoadingButton(false);
                    setCanCloseDialog(true);
                }).catch(()=>{
                    setLoadingButton(false);
                    setCanCloseDialog(true);
                });
            }
            
        }
    }

    const approveFlip = async () => {
        if( ethereum && selectedFlip ){
            return await approveCurrency(ethereum, player, selectedFlip.currency.address, selectedFlip.amount.toString()).then( async (flip) => {
                await updateAllowance(selectedFlip.currency);
                return true;
            }).catch( (error) => {
                //console.log({ERROR: error.message}); 
                return false;
            });
        }
    }

    const confirmFlip = async () => {
        if( ethereum && selectedFlip ){
            await joinFlip(ethereum, player, selectedFlip.key, selectedFlip.currency.address, selectedFlip.amount.toString(), selectedSide).then( async (flip) => {
                await updateAllowance(selectedFlip.currency);
                await updateFlips();
                updateSelectedFlip(await getFlipByKey(selectedFlip.key));
            }).catch( (error) => {
                //console.log({ERROR: error.message});
                
            });
        }
    }

    return(
        <Grid>
            <Grid container columns={{xs:12, sm:12, md:12}} mb={2} 
            > 
                <Grid container item xs={12} sm={12} md={12} justifyContent="center" alignItems="center"> 
                    <Typography fontSize={24}>{selectedFlip ? shortAddress(selectedFlip.key, 10) : TEXT_ADDRESS_ZERO}</Typography>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="center" alignItems="center"> 
                    <Typography fontSize={24} mr={1}>Amount : {selectedFlip ? formatNumber(convertFromWei(selectedFlip.amount, selectedFlip.currency.ether), 4) : 0}</Typography>
                    <Typography mr={1} fontSize={24}>{selectedFlip ? selectedFlip.currency.symbol : ''}</Typography>
                    <img src={selectedFlip ? selectedFlip.currency.image : ''} alt="flip logo" width={20} />
                </Grid>

            </Grid>

            <div className="create-bet-text">Choose a coin Side</div>
            <div className="create-btn-div">
            <button className="head-btn" style={{background:selectedSide ? theme.palette.black.main : theme.palette.blue.main}} onClick={()=>{
                updateSelectedSide(true);
            }}> HEAD</button>
            <button className="tail-btn" style={{background:!selectedSide ? theme.palette.black.main : theme.palette.orange.main}} onClick={()=>{
                updateSelectedSide(false);
            }}> TAIL</button>
            </div>

            <Grid container columns={{xs:12, sm:12, md:12}} mb={2} justifyContent="center"
            > 
                <LoadingButton 
                    startIcon={allowanceOf < parseFloat(convertFromWei(selectedFlip ? selectedFlip.amount : 0, selectedFlip ? selectedFlip.currency.ether : '')) ? <ApprovalIcon /> : <CardMembershipIcon />} 
                    
                    className={classes.confirmCreateFlipBtn}
                    loadingPosition="start" 
                    loading={loadingButton} 
                    variant='contained' 
                    color={allowanceOf < parseFloat(convertFromWei(selectedFlip ? selectedFlip.amount : 0, selectedFlip ? selectedFlip.currency.ether : '')) ? "red" : "primary"} 
                    onClick={onJoinFlip}
                    style={{fontWeight:'bold'}}>
                {allowanceOf < parseFloat(convertFromWei(selectedFlip ? selectedFlip.amount : 0, selectedFlip ? selectedFlip.currency.ether : '')) ? "APPROVE " : "CONFIRM "} THE FLIP
                </LoadingButton>
            </Grid>

            <Grid container columns={{xs:12, sm:12, md:12}}   mb={2}> 
                <Grid container item xs={12} sm={12} md={12} justifyContent='center'>
                <Typography>Your choice : {selectedSide ? 'head' : 'tail'}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}