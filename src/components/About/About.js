import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { Grid } from '@mui/material';

import babytoshiLogo from '../../images/currencies/babyToshi.png';
import bitcoinLogo from '../../images/currencies/btc.png';
import bitcoinCashLogo from '../../images/currencies/btccash.png';
import bnbLogo from '../../images/currencies/bnb.png';
import busdLogo from '../../images/currencies/busd.png';
import daiLogo from '../../images/currencies/dai.png';
import ethLogo from '../../images/currencies/eth.png';
import ethClassicLogo from '../../images/currencies/ethclassic.png';
import usdtLogo from '../../images/currencies/usdt.png';
import maticLogo from '../../images/currencies/matic.png';
import xrpLogo from '../../images/currencies/xrp.png';
import adaLogo from '../../images/currencies/ada.png';
import shibLogo from '../../images/currencies/shib.png';
import dotLogo from '../../images/currencies/dot.png';
import axsLogo from '../../images/currencies/axs.png';
import ftmLogo from '../../images/currencies/ftm.png';
import dogeLogo from '../../images/currencies/doge.png';
import slpLogo from '../../images/currencies/slp.png';
import xtzLogo from '../../images/currencies/xtz.png';


import pancakeswapLogo from '../../images/exchanges/pancakeswap.png';
import poocoinLogo from '../../images/exchanges/poocoin.png';
import dextoolsLogo from '../../images/exchanges/dextools.png';
import boggedfinanceLogoBlack from '../../images/exchanges/boggedfinance_light.png';
import boggedfinanceLogoWhite from '../../images/exchanges/boggedfinance_dark.png';
import babyswapLogo from '../../images/exchanges/babyswap.png';
import floozLogoBlack from '../../images/exchanges/flooz_light.png';
import floozLogoWhite from '../../images/exchanges/flooz_dark.png';

import toshiFlipLogo from "../../images/logo/toshiflip.png";


import '../../index.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.orange,
        fontFamily: ['PhosphateInline', 'PhosphateInline'],
        weights: [400],
    },
    textTitle: {
        fontFamily: 'PhosphateInline',
        weights: [80, 20, 60],
    },
    textSubTitle: {
        fontFamily: 'PhosphateSolid',
        marginBottom:-10,
    },
    textExtra: {
        fontFamily: 'PhosphateSolid',
    },
    textNormal: {
        fontFamily: 'PhosphateRR Solid',
    },
}));

export default function About(){
    const theme = useTheme();
    const classes = useStyles(theme);
    
    return(
            <Grid container columns={{xs:12, sm:12, md:12}} columnSpacing={0} direction="row" alignItems="center"
        >

            <Grid item xs={12} sm={12} md={12} mb={{xs:1, md:2}} >
                <Card elevation={5} sx={{
                    borderRadius:{xs:3, md:7},
                    borderStartEndRadius:{xs:3, md:7},
                    borderEndStartRadius:{xs:3, md:7},
                    padding:{xs:2, md:2},
                    width:"100%"
                }} >
                    <Grid container columns={{xs:12, sm:12, md:12}} direction="column" alignItems="center"
                    >

                        <img src={toshiFlipLogo} width="250vmax" alt="toshiFlip logo" loading='lazy' />

                        <Grid  item xs={12} sm={12} md={12} container direction="column" p={{xs:1, md:1}} textAlign={"center"}
                            justifyContent="center" alignItems={"center"}>
                            <Typography color={theme.palette.blue.main} fontSize={{xs:25, md:50}} mb={{xs:1, md:0}} fontWeight='bold'>Is a Decentralized Win-to-Earn Game</Typography>
                            <Typography color={theme.palette.blue.main} fontSize={{xs:20, md:40}} mb={{xs:2, md:2}}>One VS One</Typography>
                            <Typography color={theme.palette.orange.main} className={classes.textNormal} fontSize={{xs:18, md:36}} fontWeight='bold'>MORE THAN 15 BSC TOKENS ARE AVAILABLE</Typography>
                        </Grid>
                    </Grid>

                    <Grid container columns={{xs:12, sm:8, md:8}} direction="row" alignItems="center" justifyContent="center"
                    >
                        <Grid  item xs={12} sm={12} md={12} container direction="row" p={{xs:1, md:1}} 
                            justifyContent="center"  alignItems={"center"}>
                            <Grid m={{xs:0.1, md:1}}>
                                <img width="70vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={babytoshiLogo} />
                                </Grid>
                                <Grid m={{xs:0.1, md:1}}>
                                <img width="60vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={bitcoinLogo} />
                                </Grid>
                        </Grid>

                        <Grid  item xs={12} sm={12} md={12} container direction="row" p={{xs:0.5, md:1}} 
                            justifyContent="center"  alignItems={"center"}>
                                <Grid m={{xs:0.3, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={bitcoinCashLogo} />
                                </Grid>
                                <Grid m={{xs:0.3, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={bnbLogo} />
                                </Grid>
                                <Grid m={{xs:0.3, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={busdLogo} />
                                </Grid>
                                <Grid m={{xs:0.3, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={daiLogo} />
                                </Grid>
                                <Grid m={{xs:0.3, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={ethLogo} />
                                </Grid>
                                <Grid m={{xs:0.3, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={ethClassicLogo} />
                                </Grid>
                                <Grid m={{xs:0.3, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={usdtLogo} />
                                </Grid>
                                <Grid m={{xs:0.3, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={maticLogo} />
                                </Grid>
                                <Grid m={{xs:0.1, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={xrpLogo} />
                                </Grid>
                                <Grid m={{xs:0.3, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={adaLogo} />
                                </Grid>
                                <Grid m={{xs:0.3, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={shibLogo} />
                                </Grid>
                                <Grid m={{xs:0.3, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={dotLogo} />
                                </Grid>
                                   
                                <Grid m={{xs:0.1, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={axsLogo} />
                                </Grid>
                                <Grid m={{xs:0.1, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={ftmLogo} />
                                </Grid>

                                <Grid m={{xs:0.1, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={dogeLogo} />
                                </Grid>
                                <Grid m={{xs:0.1, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={slpLogo} />
                                </Grid>
                                <Grid m={{xs:0.1, md:1}}>
                                <img width="50vmax"  loading="lazy" alt='bitcoin' rel="noopener noreferrer" src={xtzLogo} />
                                </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>


            <Grid item xs={12} sm={12} md={12} mb={{xs:1,md:2}} >
                <Grid container columns={{xs:12, sm:8, md:8}} direction="row" alignItems="center" justifyContent="center" mt={{xs:3, sm:1}}
                    >
                        <Typography className={classes.textTitle} fontSize={{xs:25, md:50}}  color={theme.palette.orange.main} mr={1}>BUY </Typography>
                            <Typography className={classes.textTitle} fontSize={{xs:25, md:50}}  color={theme.palette.blue.main}>BABY</Typography>
                            <Typography className={classes.textTitle} fontSize={{xs:25, md:50}}  color={theme.palette.orange.main}>TOSHI</Typography>

                    </Grid>

                    <Grid  item xs={12} sm={12} md={12} container direction="row" 
                            justifyContent="center"  alignItems={"center"}>
                                <Grid m={{xs:0.5, md:1}}>
                                <a href='https://pancakeswap.finance/swap?outputCurrency=0xd2309bbd6ec83d8b3341ce5b061ce378f45c2621' target='_blank' rel="noopener noreferrer">
                                <img width="40vmax"  loading="lazy" alt='bitcoin' src={pancakeswapLogo} />
                                </a>
                                </Grid>
                                <Grid m={{xs:0.5, md:1}}>
                                <a href='https://poocoin.app/swap?outputCurrency=0xd2309bbd6ec83d8b3341ce5b061ce378f45c2621' target='_blank' rel="noopener noreferrer">
                                <img width="40vmax"  loading="lazy" alt='bitcoin' src={poocoinLogo} />
                                </a>
                                </Grid>
                                <Grid m={{xs:0.5, md:1}}>
                                <a href='https://www.dextools.io/app/bsc/pair-explorer/0x6b560e207b141504bf5f7aecf2f0b02b012ef25e' target='_blank' rel="noopener noreferrer">
                                <img width="40vmax"  loading="lazy" alt='bitcoin' src={dextoolsLogo} />
                                </a>
                                </Grid>
                                <Grid m={{xs:0.1, md:1}}>
                                <a href='https://charts.bogged.finance/0xD2309BbD6Ec83D8B3341cE5b061ce378F45c2621' target='_blank' rel="noopener noreferrer">
                                <img width="40vmax"  loading="lazy" alt='bitcoin' src={theme.palette.mode==='light' ? boggedfinanceLogoBlack : boggedfinanceLogoWhite} />
                                </a>
                                </Grid>
                                <Grid m={{xs:0.1, md:1}}>
                                <a href='https://exchange.babyswap.finance/#/swap?outputCurrency=0xd2309bbd6ec83d8b3341ce5b061ce378f45c2621' target='_blank' rel="noopener noreferrer">
                                <img width="40vmax"  loading="lazy" alt='bitcoin' src={babyswapLogo} />
                                </a>
                                </Grid>
                                <Grid m={{xs:0.1, md:1}}>
                                <a href='https://www.flooz.trade/wallet/0xd2309bbd6ec83d8b3341ce5b061ce378f45c2621/' target='_blank' rel="noopener noreferrer">
                                <img width="40vmax"  loading="lazy" alt='bitcoin' src={theme.palette.mode==='light' ? floozLogoBlack : floozLogoWhite} />
                                </a>
                                </Grid>
                        </Grid>
            </Grid>

            </Grid>
        );


}