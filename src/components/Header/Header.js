import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import { useTheme, } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
//import {BSCLogo} from '../Logos';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { Button } from '@mui/material';
import {shortAddress, TEXT_ADDRESS_ZERO} from "../../methods/Methods";

const BSCLogo = () => (
  <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V20C30 25.5228 25.5228 30 20 30H10C4.47715 30 0 25.5228 0 20V10Z"
      fill="#F3BA2F"
    />
    <path
      d="M11.3588 13.5038L15 9.8625L18.6431 13.5056L20.7619 11.3869L15 5.625L9.24 11.385L11.3588 13.5038ZM5.625 15L7.74375 12.8812L9.8625 15L7.74375 17.1188L5.625 15ZM11.3588 16.4963L15 20.1375L18.6431 16.4944L20.7619 18.6122L15 24.375L9.24 18.615L9.23719 18.6122L11.3588 16.4963ZM20.1375 15L22.2563 12.8812L24.375 15L22.2563 17.1188L20.1375 15ZM17.1488 14.9981H17.1506V15L15 17.1506L12.8522 15.0037L12.8484 15L12.8522 14.9972L13.2281 14.6203L13.4109 14.4375L15 12.8494L17.1497 14.9991L17.1488 14.9981Z"
      fill="white"
    />
  </svg>
);

export default function Header(props){
    const theme = useTheme();
    const {ethereum, player, updatePlayer, goodNetwork, } = props;
    
    const [contentConnexion, setContentConnexion] = useState(<div></div>);

    const useStyles = makeStyles(() => ({
        root: {
            backgroundColor: theme.palette.background.default,
            color:theme.palette.text.primary,
        },
        itemToolBar: {
          backgroundColor: theme.palette.background.default,
          color:theme.palette.text.primary,
          padding:10,
      },
    }));
    const classes = useStyles();
useEffect(()=>{
    if( player.key === TEXT_ADDRESS_ZERO ){
      setContentConnexion(<Button variant='contained' onClick={onClickConnexion} style={{display:player.key===TEXT_ADDRESS_ZERO ? 'block' : 'none'}}>Connect</Button>);
    }else{
      setContentConnexion(<Typography onClick={onClickDeconnect} style={{display:player.key!==TEXT_ADDRESS_ZERO ? 'block' : 'none'}}>{shortAddress(player.key,10)}</Typography>);
    }
  }, [player]);

    const onClickConnexion = async() =>{
      click();
      async function click(){
          if( ethereum ){
              await ethereum.request({ method: 'eth_requestAccounts' }).then( async (accounts) => {
                  await updatePlayer();
              }).catch(()=>{

              });
          }
      }
  }

  const onClickDeconnect = async() =>{
    click();
    async function click(){
        if( ethereum ){
            await ethereum.request({ method: 'wallet_requestPermissions',
            params: [{
               eth_accounts: {},
            }] }).then( async (accounts) => {
                await updatePlayer();
                console.log({ACCCCCOUNTS_DISCONNECT:accounts});
            }).catch(()=>{
            });
        }
    }
}

    return(

<Box sx={{ flexGrow: 1 }} container >
      <AppBar position='static' elevation={0} className={classes.root} >
        <Toolbar >
        <Grid container columns={{xs:12, sm:12, md:12}} columnSpacing={0} direction="row" alignItems="center">
          <Grid 
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={10} 
          sm={10}
          md={1} 
          >
            {
              goodNetwork ? 
              (<Stack direction="row" spacing={1} justifyContent="center"
              alignItems="flex-end">
                <Grid><BSCLogo /></Grid>
              <Grid><Typography style={{}}>{'BSC'}</Typography></Grid>
              </Stack>) :
              (
                <Stack direction="row" spacing={1} justifyContent="center"
                alignItems="flex-end">
                  <DangerousIcon color='error' />
                  <Typography style={{}}>{'Wrong'}</Typography>
                </Stack>
              )
            }
            
          </Grid>
          
          
          <Grid 
          container
          item
          justifyContent="flex-start"
          alignItems="center"
          xs
          sm
          md={11} 
          sx={{display:{xs:"none", md:"block"}}}
          >
            
      <Grid
      item
      xs={12} 
      sm={12}
      md={12} 
      >
      <coingecko-coin-price-marquee-widget  
        width='100%'
        coin-ids="bitcoin,binancecoin,binance-usd,ethereum,tether,dai,ripple" 
        font-color={theme.palette.text.primary}
        currency="usd" 
        background-color={theme.palette.background.default} 
        locale="fr"></coingecko-coin-price-marquee-widget>
      </Grid>
          </Grid>

            <Grid 
          container
          item
          justifyContent="flex-end"
          alignItems="center"
          mt={2}
          xs={12} 
          sm={12}
          md={12} 
          >
            {contentConnexion}
            
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
</Box>
    );
  }
 