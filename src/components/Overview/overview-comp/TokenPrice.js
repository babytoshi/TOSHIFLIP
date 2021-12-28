import React, {useState, useEffect,} from 'react';
import "./tokenPrice.css";
import {getCurrencyPrice, convertNumberToCurrency,} from "../../../methods/Methods";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import babytoshiLogo from "../../../images/currencies/babyToshi.png";
import btcLogo from "../../../images/currencies/btc.png";
import bnbLogo from "../../../images/currencies/bnb.png";

function TokenPrice(props) {
  const {babytoshiPrice, btcbPrice} = props;
  const [bnbPrice, setBnbPrice] = useState(0);
  const bnbContract = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

  const initData = async () => {
    let _bnbPrice = await getCurrencyPrice(bnbContract);
    setBnbPrice(_bnbPrice);
  }
  

  useEffect(() => {
    initData();    
  });

  return (
    <Grid sx={{marginTop:{xs:1, sm:2}, marginBottom:{xs:1, sm:1}}} >
      <Grid container columns={ {xs:12, sm:12, md:12, lg:12}} direction="row" justifyContent={"center"} sx={{width:"100%"}}>

        <Grid item xs={12} sm={12} md={12} lg={4} container direction="row" alignItems={"stretch"} justifyContent={"center"} p={1}
        //border="2px solid blue"
        >
          <Card elevation={5} sx={{ borderRadius: 5, padding: {xs:2, sm:3}, width:"100%", textAlign:"center"}}>
            <Grid container direction="column" justifyContent={"center"} alignItems={"center"}>
              <Grid container direction="row" justifyContent={"center"}>
                <img
                //className="tokenlogo"
                width="25vmax"
                alt="tokenlogo"
                src={babytoshiLogo}
                //src="https://app.babytoshi.io/static/media/babyToshi.1b595c07.png"
              />
              <Typography ml={1} fontSize={{xs:13, md:18}} sx={{fontWeight:900, fontStyle:"italic"}} >BABYTOSHI</Typography>
              </Grid>
              <Grid>
                <Typography fontSize={{xs:13, md:18}} sx={{fontWeight:600, fontStyle:"italic"}} >{convertNumberToCurrency(parseFloat(babytoshiPrice), 10)}</Typography>
              </Grid>

            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} sm md lg={4} container justifyContent={"center"} p={1}
        >
          <Card elevation={5} sx={{ borderRadius: 5, padding: {xs:2, sm:3}, width:"100%", textAlign:"center"}}>
          <Grid container direction="column" justifyContent={"center"} alignItems={"center"}>
          <Grid container direction="row" justifyContent={"center"}>
              <img
              width="25vmax"
              alt="tokenlogo"
              src={bnbLogo}
            />
            <Typography ml={1} fontSize={{xs:13, md:18}} sx={{fontWeight:900, fontStyle:"italic"}} >BNB</Typography>
            </Grid>
            <Grid>
              <Typography fontSize={{xs:13, md:18}} sx={{fontWeight:600, fontStyle:"italic"}} >{convertNumberToCurrency(parseFloat(bnbPrice), 2)}</Typography>

            </Grid>
            </Grid>
            
          </Card>
        </Grid>

        <Grid item xs={12} sm md lg={4} container justifyContent={"center"} p={1}
        >
          <Card elevation={5} sx={{ borderRadius: 5, padding: {xs:2, sm:3}, width:"100%", textAlign:"center"}}>
            <Grid container direction="column" justifyContent={"center"} alignItems={"center"}>
              <Grid container direction="row" justifyContent={"center"}>
                <img
                width="25vmax"
                alt="tokenlogo"
                src={btcLogo}
              />
              <Typography ml={1} fontSize={{xs:13, md:18}} sx={{fontWeight:900, fontStyle:"italic"}} >BTC</Typography>

              </Grid>
              <Grid>
                <Typography fontSize={{xs:13, md:18}} sx={{fontWeight:600, fontStyle:"italic"}} >{convertNumberToCurrency(parseFloat(btcbPrice), 2)}</Typography>

              </Grid>
            </Grid>
            
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TokenPrice;
