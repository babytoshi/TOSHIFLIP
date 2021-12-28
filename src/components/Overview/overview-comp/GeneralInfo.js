import React, {useState, useEffect,} from 'react';
import { useTheme } from '@mui/material/styles';
import "./generalInfo.css";
import {getTotalSupply, getLiquidityPoolBabytoshi, getLiquidityPoolWBNB} from "../../../abis/BABYTOSHI";
import {convertFromWei, convertNumberToCurrency, formatNumber,} from "../../../methods/Methods";
import {BABYTOSHI_CURRENCY_SYMBOL} from "../../../abis/BABYTOSHI";
import {WBNB_CURRENCY_SYMBOL} from "../../../abis/WBNB";
import {getTotalDividendsDistributed} from "../../../abis/BABYTOSHI_DIVIDEND_TRACKER";
import Card from '@mui/material/Card';
import { Grid, Typography } from '@mui/material';

function GeneralInfo(props) {
  const theme = useTheme();
  const {babytoshiPrice, btcbPrice} = props;
  const [totalSupply, setTotalSupply] = useState(0);
  const [liquidityPoolBabytoshi, setLiquidityPoolBabytoshi] = useState(0);
  const [liquidityPoolWbnb, setLiquidityPoolWbnb] = useState(0);
  const [circulatingSupply, setCirculatingSupply] = useState(0);
  const [totalRewards, setTotalRewards] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const initData = async () => {
    let [_totalSupply, _liquidityPoolBabytoshi, _liquidityPoolWbnb, _totalRewards] = 
    await Promise.all([getTotalSupply(),
                      getLiquidityPoolBabytoshi(), 
                      getLiquidityPoolWBNB(), 
                      getTotalDividendsDistributed(),
                    ]);
                    setTotalSupply(convertFromWei(_totalSupply));
                    setLiquidityPoolBabytoshi(convertFromWei(_liquidityPoolBabytoshi));
                    setCirculatingSupply(parseFloat(convertFromWei(_totalSupply)) - parseFloat(convertFromWei(_liquidityPoolBabytoshi)));
                    setMarketCap(parseFloat(convertFromWei(_totalSupply)) * parseFloat(babytoshiPrice)); 
                    setLiquidityPoolWbnb(convertFromWei(_liquidityPoolWbnb));
                    setTotalRewards(convertFromWei(_totalRewards) * parseFloat(btcbPrice));         
  }
  
  useEffect(() => {
    initData();    
  });

  return (
    <Card elevation={5} sx={{ borderRadius: 5, padding: {xs:2, sm:3}, textAlign:"center"}} >
      <Grid container columns={ {xs:12, sm:12, md:12}} direction="column" justifyContent={"center"} mb={2}>
        <Grid item xs={12} sm={12} md={12} container justifyContent={"center"}>
          <Typography fontSize={{xs:16, md:30}} fontWeight={"bold"}>BABYTOSHI GENERAL INFO</Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={12} md={10} container direction="row" 
        >
        <Grid item xs sm md container justifyContent={"flex-start"}
        >
            <Typography fontSize={{xs:13, sm:15, md:18}} sx={{color:theme.palette.blue.main, fontWeight:700}}>Total Supply :</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4}  container justifyContent={"flex-end"} alignItems={"center"}>
            <Typography fontSize={{xs:13, sm:15, md:18}}>{formatNumber(totalSupply, 0)}</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={10} container direction="row"
        >
        <Grid item xs sm md container justifyContent={"flex-start"}
        >
            <Typography fontSize={{xs:13, sm:15,md:18}} sx={{color:theme.palette.blue.main, fontWeight:700}}>Pooled {BABYTOSHI_CURRENCY_SYMBOL} :</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4}  container justifyContent={"flex-end"} alignItems={"center"}>
            <Typography fontSize={{xs:13, sm:15, md:18}}>{formatNumber(liquidityPoolBabytoshi, 2)}</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={10} container direction="row"
        >
        <Grid item xs sm md container justifyContent={"flex-start"}
        >
            <Typography fontSize={{xs:13, sm:15,md:18}} sx={{color:theme.palette.blue.main, fontWeight:700}}>Circulating Supply :</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4}  container justifyContent={"flex-end"} alignItems={"center"}>
            <Typography fontSize={{xs:13, sm:15, md:18}}>{formatNumber(circulatingSupply, 2)}</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={10} container direction="row"
        >
        <Grid item xs sm md container justifyContent={"flex-start"}
        >
            <Typography fontSize={{xs:13, sm:15,md:18}} sx={{color:theme.palette.blue.main, fontWeight:700}}>Pooled {WBNB_CURRENCY_SYMBOL} :</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4}  container justifyContent={"flex-end"} alignItems={"center"}>
            <Typography fontSize={{xs:13, sm:15, md:18}}>{formatNumber(liquidityPoolWbnb, 2)}</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={10} container direction="row"
        >
            <Grid item xs sm md container justifyContent={"flex-start"}
            >
            <Typography fontSize={{xs:13, sm:15,md:18}} sx={{color:theme.palette.blue.main, fontWeight:700}}>Distributed Rewards :</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4}  container justifyContent={"flex-end"} alignItems={"center"}>
            <Typography fontSize={{xs:13, sm:15, md:18}}>{convertNumberToCurrency(totalRewards, 2)}</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={10} container direction="row"
        >
          <Grid item xs sm md container justifyContent={"flex-start"}
          >
            <Typography fontSize={{xs:13, sm:15,md:18}} sx={{color:theme.palette.blue.main, fontWeight:700}}>MarketCap :</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4}  container justifyContent={"flex-end"} alignItems={"center"}>
            <Typography fontSize={{xs:13, sm:15, md:18}}>{convertNumberToCurrency(marketCap, 2)}</Typography>
          </Grid>
        </Grid>

      </Grid>
    </Card>
  );
}

export default GeneralInfo;
