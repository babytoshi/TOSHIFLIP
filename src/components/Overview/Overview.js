import React, {useState, useEffect,} from 'react';
import GeneralInfo from "./overview-comp/GeneralInfo";
import TokenPrice from "./overview-comp/TokenPrice";
import HistoryWidget from "./overview-comp/HistoryWidget";
import YourBalance from "./overview-comp/YourBalance";
import {getCurrencyPrice, } from "../../methods/Methods";
import {getBabytoshiAddress, } from "../../abis/BABYTOSHI";

import Grid from '@mui/material/Grid';
export default function Overview(props) {
  const {ethereum, player} = props;
  const [babytoshiPrice, setBabytoshiPrice] = useState(0);
  const [btcbPrice, setBtcbPrice] = useState(0);
  const btcContract = "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c";

  const initData = async () => {
    let [_babytoshiPrice,_btcbPrice] = 
    await Promise.all([getCurrencyPrice(getBabytoshiAddress()),
                       getCurrencyPrice(btcContract), 
                    ]);
                    setBabytoshiPrice(_babytoshiPrice);
                    setBtcbPrice(_btcbPrice);
  }
  

  useEffect(() => {
    initData();    
  });
  return (
    <Grid container columns={{xs:12, sm:12, md:12}} spacing={0.5} p={0.5} direction="row" alignItems="stretch" justifyContent={"center"}
        >
          <Grid item xs={12} sm={12} md={8} container direction="column" 
           >
            <YourBalance ethereum={ethereum} player={player} babytoshiPrice={babytoshiPrice} btcbPrice={btcbPrice} />
            <TokenPrice babytoshiPrice={babytoshiPrice} btcbPrice={btcbPrice} />
            <GeneralInfo babytoshiPrice={babytoshiPrice} btcbPrice={btcbPrice} />
          </Grid>

          <Grid item xs={12} sm md container direction="row" alignItems={"stretch"} justifyContent={"center"} mt={{xs:2, sm:0}}
          >
            <HistoryWidget player={player}  />
          </Grid>
    </Grid>
  );
}