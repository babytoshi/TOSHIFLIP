import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';
import { Card, Button } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

import "./createyourbet.css";
import {createFlip, approveCurrency, BABYTOSHI_CURRENCY, DEFAULT_CURRENCY, ALL_CURRENCIES, getAllowanceOf, convertFromWei, convertToWei, TEXT_ADDRESS_ZERO} from "../../../../methods/Methods";

const useStyles = makeStyles( (theme) => ({
  root: {
    textAlign: "center",
    padding: 30,
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
    backgroundColor: theme.palette.primary,
    cursor: 'pointer',
  }
}));

export default function CreateYourBet(props){
  const theme = useTheme();
  const {ethereum, player, updateFlips} = props;
  const classes = useStyles(theme);
  const [currencies, setCurrencies] = useState([]);
  const [selectedSide, setSelectedSide] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState(DEFAULT_CURRENCY);
  const [amount, setAmount] = useState(0);
  const [allowanceOf, setAllowanceOf] = useState(0);

  useEffect(() => {
    init();
    async function init(){
        let _currencies = ALL_CURRENCIES;
        setCurrencies(_currencies);
    }
  });

  useEffect(() => {
    init();
    async function init(){
      let _babytoshi = BABYTOSHI_CURRENCY;
      setSelectedCurrency(_babytoshi);
    }
  }, [currencies]);

  useEffect(() => {
    init();
    async function init(){
      await updateAllowance(selectedCurrency);
    }
  }, [player]);

const changeCurrency = async (event) => {
  let _currency =  getCurrencyByAddress(currencies, event.target.value);
  await updateSelectedCurrency(_currency);
};
const changeAmount = async (event) => {
  let _amount = event.target.value.length > 0 ? parseFloat(event.target.value) : 0;
  setAmount(_amount);
  await updateAllowance(selectedCurrency);
};

const onCreateFlip = async () => {
  if( ethereum ){
      if( allowanceOf < amount ){
        await approveCurrency(ethereum, player, selectedCurrency.address, convertToWei(amount.toString(), selectedCurrency.ether)).then( async (flip) => {
          await updateAllowance(selectedCurrency);
          await createFlip(ethereum, player, selectedCurrency.address, convertToWei(amount.toString(), selectedCurrency.ether), selectedSide).then( async (flip) => {
            await updateAllowance(selectedCurrency);
            setSelectedSide(true);
            setAmount(0);
            await updateFlips();
          }).catch( () => {

          });
        }).catch( () => {

        });
      }else{
        await createFlip(ethereum, player, selectedCurrency.address, convertToWei(amount.toString(), selectedCurrency.ether), selectedSide).then( async (flip) => {
          await updateAllowance(selectedCurrency);
          setSelectedSide(true);
          setAmount(0);
          await updateFlips();
        }).catch( () => {

        });
      }
  }
}

async function updateSelectedCurrency(_currency){
  setSelectedCurrency(_currency);
  await updateAllowance(_currency);  
}

async function updateAllowance(_currency){
  let allowance = await getAllowanceOf(_currency.address, player);
  allowance = parseFloat(convertFromWei(allowance, _currency.ether));
  setAllowanceOf(allowance);
}

function getCurrencyByAddress(currencies, address){
  for( let currency of currencies ){
      if( currency.address.toLowerCase() === address.toLowerCase() ){
          return currency;
      }
  }
  return DEFAULT_CURRENCY;
}

  return (
    <div>
      <Card className={classes.root} sx={{ borderRadius: 10 }} elevation={5}>
        <h2 className="create-bet-h2">CREATE YOUR FLIP</h2>
        <div className="create-bet-text">Choose a coin Side</div>
        <div className="create-btn-div">

          <button className="head-btn" style={{background:selectedSide ? theme.palette.black.main : theme.palette.blue.main}} onClick={()=>{
            setSelectedSide(true);
          }}> HEAD</button>
          <button className="tail-btn" style={{background:!selectedSide ? theme.palette.black.main : theme.palette.orange.main}} onClick={()=>{
            setSelectedSide(false);
          }}> TAIL</button>
        </div>
        <div className="create-bet-text">Select a currency</div>
        <div className="img-div">
          <img
            className="img-logo"
            src={selectedCurrency.image}
            alt="TokenLogo"
            loading="lazy"
          />
          <Select
            style={{color:theme.palette.text.primary, borderColor:theme.palette.text.primary, fontWeight:'bold'}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCurrency.address !== TEXT_ADDRESS_ZERO ? selectedCurrency.address.toLowerCase() : ''}
            label="Select currency"
            onChange={changeCurrency}
            >
            {
                currencies.map( (currency,key) => {
                    return(<MenuItem 
                        key={currency.symbol} 
                        style={{color:theme.palette.text.primary, backgroundColor:theme.palette.background, fontWeight:'bold'}}
                        value={currency.address}
                        >
                          {currency.symbol}
                        </MenuItem>);
                }).sort( (a,b) => a.key.toString().localeCompare(b.key.toString()))
            }
            </Select>
        </div>
        <input
          type="number"
          className="number-token-input"
          placeholder="Enter the amount here"
          onChange={changeAmount}
          style={{background:theme.palette.background.default, color:theme.palette.text.primary}}
        />
        <br />
        <Button variant="contained" className={classes.confirmCreateFlipBtn} disabled={amount > 0 ? false : true} onClick={onCreateFlip}>
          {"CONFIRM YOUR FLIP"}
        </Button>
      </Card>
    </div>
  );
};
