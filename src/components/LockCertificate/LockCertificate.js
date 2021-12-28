import React from 'react';
import { useTheme } from '@mui/material/styles';
import mudraLockBlack from "../../images/others/mudra_lock_black.png";
import mudraLockWhite from "../../images/others/mudra_lock_white.png";

import qrCode from "../../images/others/mudra_qrcode.png";
import { Grid, Typography, Box, CircularProgress, Hidden } from '@mui/material';
import momenttimezone from 'moment-timezone';
import moment from 'moment';
import {formatNumber } from '../../methods/Methods';
import LockClockIcon from '@mui/icons-material/LockClock'; // for lock cretificate


const LOCKED_LP_TOKEN = 97419.2095;
const TOTAL_LP_TOCKEN = 107349.0582;
const UNLOCK_DATE = new Date(momenttimezone.tz("2022-08-16 12:59:50", "Europe/Zurich").format()); // 22th November 2021


export default function LockCertificate() {
    const theme = useTheme();
    return (
        <Grid item xs={12} sm={12} container columns={{xs:12, sm:12, md:12}} style={{textAlign:'center'}} mt={3}  justifyContent="center">
          <Grid item xs={12} sm={12}>
          <Typography mt={3} mb={3}>
              <a target="_blank" rel="noopener noreferrer" style={{color: theme.palette.primary.main, fontWeight:'bold'}} href="https://mudra.website/?certificate=yes&type=0&lp=0x6b560e207b141504bf5f7aecf2f0b02b012ef25e">View certificate on Mudra website</a>
              </Typography>
          </Grid>         


            <Grid item xs={12} sm={12} md={6} border={"5px solid " + theme.palette.primary.main} p={5}>
            <Grid container justifyContent="center" alignItems="center">
            <img style={{float:'left'}} src={theme.palette.mode === 'light' ? mudraLockBlack : mudraLockWhite} alt="certificate logo" loading='lazy' />
            <Typography ml={1} fontWeight="bold">Mudra Lock Certificate</Typography>
            </Grid>

            <Grid mt={5} container direction="row" justifyContent={"center"}>
              <Grid item xs={12} sm={5} container justifyContent={{xs:"center", sm:"flex-end"}}>
              <a style={{color:theme.palette.primary.main,display:"flow"}} href="https://bscscan.com/token/0x6b560e207b141504bf5f7aecf2f0b02b012ef25e" target="_blank" rel="noopener noreferrer">LP Token <Hidden smDown={true}><span>: </span></Hidden></a>  
              </Grid>
              <Grid item xs={12} sm={7} container justifyContent={{xs:"center", sm:"flex-start"}}>
              <a style={{color:theme.palette.primary.main, fontWeight:"bold", marginLeft:5}} href="https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" target="_blank" rel="noopener noreferrer"> WBNB </a>
              <span style={{marginLeft:5, marginRight:5}}> /</span> 
              <a style={{color:theme.palette.primary.main, fontWeight:"bold"}} href="https://bscscan.com/token/0xD2309BbD6Ec83D8B3341cE5b061ce378F45c2621" target="_blank" rel="noopener noreferrer">BABYTOSHI</a>
              </Grid>
            </Grid>


            <Grid container justifyContent="center">
                
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress value={LOCKED_LP_TOKEN * 100 / TOTAL_LP_TOCKEN} variant="determinate" style={{color:theme.palette.primary.main,margin:10, width:180, height:180}} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        <Typography fontSize={18} fontWeight="bold" variant="caption" component="div" color="text.primary" backgroundColor={theme.palette.background.default} >
          {(formatNumber(LOCKED_LP_TOKEN * 100 / TOTAL_LP_TOCKEN, 2)) + "%"}
        </Typography>
      </Box>
    </Box>

            <Grid container justifyContent="center" alignItems="center">
            <LockClockIcon fontSize="large" style={{color:theme.palette.mode === 'light' ? theme.palette.black.main : theme.palette.white.main}} />
            <Typography fontWeight="bold">Liquidity locked</Typography>
            </Grid>

            <Grid mt={5} item sm={12} container direction="row" justifyContent={"center"}>
              <Grid item xs={12} sm={6} p={{sm:0.5}} container justifyContent={{xs:"center", sm:"flex-end"}}>
              <Typography style={{fontWeight:"bold"}}>Locked LP tokens <Hidden smDown={true}><span>: </span></Hidden></Typography>              
              </Grid>
              <Grid item xs={12} sm={6} p={{sm:0.5}} container justifyContent={{xs:"center", sm:"flex-start"}}>
              <Typography> {LOCKED_LP_TOKEN}</Typography>
              </Grid>
            </Grid>


            <Grid mb={{xs:2, sm:1}} container justifyContent="center" alignItems="center">
            <Typography ><span style={{fontWeight:"bold"}}>Total LP tokens <Hidden smDown={true}>:</Hidden></span> {TOTAL_LP_TOCKEN}</Typography>
            </Grid>

            <Grid container justifyContent="center" alignItems="center">
            <Typography ><span style={{fontWeight:"bold"}}>Unlock schedule <Hidden smDown={true}>:</Hidden><Hidden xsUp={true}><br/></Hidden></span> {UNLOCK_DATE.toDateString()}</Typography>
            </Grid>

            <Grid mt={1} container justifyContent="center" alignItems="center">
            <Typography >{LOCKED_LP_TOKEN}({(formatNumber(LOCKED_LP_TOKEN * 100 / TOTAL_LP_TOCKEN, 2)) + "%"}) tokens unlock in {moment(UNLOCK_DATE.getTime()).fromNow()}</Typography>
            </Grid>
            
            </Grid>
            <Grid item mt={2} xs={12}>
            <img src={qrCode} alt="qr code" loading='lazy' />
            </Grid>
            </Grid>
        </Grid>
    );
}