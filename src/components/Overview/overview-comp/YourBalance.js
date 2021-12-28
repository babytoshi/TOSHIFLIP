import React, {useState, useEffect,} from 'react';
import { useTheme } from '@mui/material/styles';
import "./yourBalance.css";
import {convertFromWei, convertNumberToCurrency, formatNumber, getBalanceOf, } from "../../../methods/Methods";
import Card from '@mui/material/Card';

import Grid from '@mui/material/Grid';
import {claimRewards,} from "../../../abis/BABYTOSHI";
import {getTotalDividendPlayer, getWithdrawableDividendPlayer} from "../../../abis/BABYTOSHI_DIVIDEND_TRACKER";
import {BTCB_CURRENCY_SYMBOL} from "../../../abis/BTCB";
import { Button, Typography } from '@mui/material';

import babytoshiLogo from "../../../images/currencies/babyToshi.png";
import usdtLogo from "../../../images/currencies/usdt.png";
import bitcoinLogo from "../../../images/currencies/btc.png";


function YourBalance(props) {
  const theme = useTheme();
  const {ethereum, player, babytoshiPrice} = props;
  const [babytoshiBalance, setBabytoshiBalance] = useState(0);
  const [babytoshiTotalPrice, setBabytoshiTotalPrice] = useState(0);
  const [rewardsEarn, setRewardsEarn] = useState(0);
  const [withdrawableEarn, setWithdrawableEarn] = useState(0);
  const isAuthenticated = false;

  const babyToshiContract = "0xd2309bbd6ec83d8b3341ce5b061ce378f45c2621";

  const initData = async () => {
    let [_babytoshiBalance,_rewardsEarn, _withdrawableEarn] = 
      await Promise.all([getBalanceOf(babyToshiContract, player),
                        getTotalDividendPlayer(player.key), 
                        getWithdrawableDividendPlayer(player.key),
                      ]);
                      setBabytoshiBalance(parseFloat(convertFromWei(_babytoshiBalance)));
                      setBabytoshiTotalPrice(parseFloat(convertFromWei(_babytoshiBalance)) * parseFloat(babytoshiPrice));
                      setRewardsEarn(convertFromWei(_rewardsEarn));
                      setWithdrawableEarn(convertFromWei(_withdrawableEarn));
  }
  

  useEffect(() => {
    initData();           
  }, [player, babytoshiPrice]);

  const onClaimRewards = async () => {
    if( ethereum ){
        let _approveFlip = await claimRewards(ethereum, player).then( async () => {
            await initData();
            return true;
        });
        return _approveFlip;
    }
    return false;
  }
  

  if (isAuthenticated) {
    return (
      <div className="yourBalance">
        <h2 style={{fontWeight:"bold"}}>YOUR BABYTOSHI BALANCE</h2>
        <button
          className="connectBtn"
          onClick={() => {
          }}
        >
          Connect with MetaMask
        </button>
      </div>
    );
  }

  return (
    <Card width="100%" elevation={5} sx={{ borderRadius: 5, padding: {xs:2, sm:3},}} >
    <Grid container columns={ {xs:12, sm:12, md:12}} direction="column" justifyContent={"center"} mb={2}>
      <Grid item xs={12} sm={12} md={12} container justifyContent={"center"}>
        <Typography fontSize={{xs:16, md:30}} fontWeight={"bold"}>YOUR BABYTOSHI BALANCE</Typography>
      </Grid>
    </Grid>

    <Grid container justifyContent={"center"}>
      <Grid item xs={12} sm={12} md={10} direction="row" container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs sm md >
          <Typography fontSize={{xs:12, md:18}} sx={{color:theme.palette.blue.main, fontWeight:700}}>Total Balance : </Typography>
        </Grid>
        <Grid item xs sm md={4}  container justifyContent={"flex-end"} alignItems={"center"}>
          <Typography mr={1} fontSize={{xs:12, md:18}}>{formatNumber(babytoshiBalance, 2)}</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} container justifyContent={{xs:"center", md:"flex-start"}} alignItems={"center"}>
          <img
            width="25vmax"
            src={babytoshiLogo}
            alt="babytoshiLogo"
          />
        </Grid>
      </Grid>
    </Grid>


    <Grid container justifyContent={"center"} mt={1}>
    <Grid item xs={12} sm={12} md={10} direction="row" container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs sm md >
          <Typography fontSize={{xs:12, md:18}} sx={{color:theme.palette.blue.main, fontWeight:700}}>Value : </Typography>
        </Grid>
        <Grid item xs sm md={4} container justifyContent={"flex-end"} alignItems={"center"}>
          <Typography mr={1} fontSize={{xs:12, md:18}}>{convertNumberToCurrency(babytoshiTotalPrice, 2)}</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} container justifyContent={{xs:"center", md:"flex-start"}} alignItems={"center"}>
          <img
            width="25vmax"
            src={usdtLogo}
            alt="babytoshiLogo"
          />
        </Grid>
      </Grid>
    </Grid>


    <Grid container justifyContent={"center"} mt={1}>
    <Grid item xs={12} sm={12} md={10} direction="row" container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs sm md >
          <Typography fontSize={{xs:12, md:18}} sx={{color:theme.palette.blue.main, fontWeight:700}}>Earned Rewards :</Typography>
        </Grid>
        <Grid item xs sm md={4} container justifyContent={"flex-end"} alignItems={"center"}>
          <Typography mr={1} fontSize={{xs:12, md:18}}>{formatNumber(rewardsEarn, 6)} {BTCB_CURRENCY_SYMBOL}</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} container justifyContent={{xs:"center", md:"flex-start"}} alignItems={"center"}>
          <img
            width="25vmax"
            src={bitcoinLogo}
            alt="babytoshiLogo"
          />
        </Grid>
      </Grid>
    </Grid>


    <Grid container justifyContent={"center"} mt={1}>
    <Grid item xs={12} sm={12} md={10} direction="row" container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs sm md >
          <Typography fontSize={{xs:12, md:18}} sx={{color:theme.palette.blue.main, fontWeight:700}}>Claimable Rewards :</Typography>
        </Grid>
        <Grid item xs sm md={4} container justifyContent={"flex-end"} alignItems={"center"}>
          <Typography mr={1} fontSize={{xs:12, md:18}}>{formatNumber(withdrawableEarn, 6)} {BTCB_CURRENCY_SYMBOL}</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} container justifyContent={{xs:"center", md:"flex-start"}} alignItems={"center"}>
          <img
            width="25vmax"
            src={bitcoinLogo}
            alt="babytoshiLogo"
          />
        </Grid>
      </Grid>
    </Grid>

    <Grid container justifyContent={"center"} mt={1}>
    <Grid item xs={12} sm={12} md={8} direction="row" container justifyContent={"flex-end"} alignItems={"center"}>
          <Button variant='contained' onClick={onClaimRewards}>Claim</Button>
      </Grid>
    </Grid>
  </Card>
  );
}

export default YourBalance;
