import React, { useState,useEffect, useRef, useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ACTUAL_GOOD_NETWORK, TEXT_ADDRESS_ZERO,} from '../methods/Methods';
import { Player } from '../classes/Player';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme, } from '@mui/material/styles';
import {ColorModeContext} from './ToggleColorMode';
import {getPlayer} from "../abis/TOSHIFLIP";
import Grid from '@mui/material/Grid';
import Dashboard from './Dashboard';
import detectEthereumProvider from '@metamask/detect-provider';

export default function App(){
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const [ethereum, setEthereum] = useState(window.ethereum);
    const [player, setPlayer] = useState(new Player());
    const [goodNetwork, setGoodNetwork] = useState(true);
    const [networkId, setNetworkId] = useState('0x0');
    const [showBackDrop, setShowBackDrop] = useState(false);
    
    const divApp = useRef();

    window.addEventListener('load', async () => {
        setEthereum(await detectEthereumProvider());
        if( ethereum ){
            await updatePlayer();
            await updateNetwork();
            ethereum.on('accountsChanged', async () => {
                await updatePlayer();
            });

            ethereum.on('chainChanged', async () => {
                await updateNetwork();
            });
        }else{
            setShowBackDrop(false);
        }
        
    });
    async function updateNetwork(){
        if( ethereum ){
          let _networkId = await ethereum.request({ method: 'net_version' });
          setNetworkId(_networkId);
          if( parseInt(_networkId) === parseInt(ACTUAL_GOOD_NETWORK.chainId, 16) ){
            setGoodNetwork(true);
          }else{
            setGoodNetwork(false);
          }
        }
      }

    useEffect(() => {
        updateNetwork();
        updatePlayer();
    }, [ethereum]);
  
    async function updatePlayer(){
      let _userAddress = TEXT_ADDRESS_ZERO;
      let _player = new Player();
      if( ethereum ){
        let accounts = await ethereum.request({ method: 'eth_accounts' });
        if( accounts.length > 0 ){
            _userAddress = accounts[0];
            _player = await getPlayer(_userAddress);
            _player.connected = true;
        }
      }
      setPlayer(_player);
      return _player;
    }

    return(
        <Grid container ref={divApp} style={{backgroundColor:theme.palette.background.default, }} p={1} columns={{xs:12, sm:12, md:12}} columnSpacing={0} rowSpacing={1} direction="row" justifyContent='center'        >
<Grid item xs={12} sm={12} md={12}>
            <Dashboard key='component-header'
                    colorMode={colorMode}
                    theme={theme}
                    goodNetwork={goodNetwork}
                    networkId={networkId}
                    ethereum={ethereum} player={player} updatePlayer={updatePlayer}
                     />
                     </Grid>
            
            <Grid item xs sm md>
            <Backdrop key='backdrop-main' sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }} open={showBackDrop}>
                <CircularProgress color="primary" />
            </Backdrop>
            </Grid>
        </Grid>
    )
}