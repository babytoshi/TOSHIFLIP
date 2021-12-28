import React, {useState, useEffect, useRef} from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import HomeIcon from '@mui/icons-material/Home'; // for home
import PieChartIcon from '@mui/icons-material/PieChart'; //for tokenomics
import LockOpenIcon from '@mui/icons-material/LockOpen'; // for register
import InputIcon from '@mui/icons-material/Input'; // for subscribe
import CardMembershipIcon from '@mui/icons-material/CardMembership'; // for subscribe
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'; //for swap
import RepeatIcon from '@mui/icons-material/Repeat'; // for swap
import ListAltIcon from '@mui/icons-material/ListAlt'; // for listings
import FeedIcon from '@mui/icons-material/Feed'; // for white paper
import LockClockIcon from '@mui/icons-material/LockClock'; // for lock cretificate
import LanguageIcon from '@mui/icons-material/Language'; // for website
//import BatteryFullIcon from '@mui/icons-material/BatteryFull';
//import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'; // for swap
//import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import WebIcon from '@mui/icons-material/Web'; // for website link
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Button from '@mui/material/Button';

import { shortAddress, convertFromWei,convertToWei,formatNumber, BABYTOSHI_CURRENCY, getBabytoshiPrice, convertNumberToCurrency } from '../../methods/Methods';


import ToshiFlipAnimation from "../ToshiFlipAnimation/ToshiFlipAnimation";


//import Home from './Home/Home';


import ComponentCreateBet from "../CardGames/ComponentCreateBet";


export default function Games(props){
    const theme = useTheme();
    const {ethereum, player, updatePlayer} = props;
    const [betsList, setBetsList] = useState([]);
    return(
<div>
  
  <Grid>
    <ToshiFlipAnimation />
  </Grid>
  
  <ComponentCreateBet ethereum={ethereum} player={player} updatePlayer={updatePlayer} />
        <Card elevation={5}>
      <CardContent >
      <Typography   gutterBottom>
        Last pending bet
      </Typography>
      <Typography  style={{fontSize:15}} gutterBottom>
        Click 'join' to start a flip game
      </Typography>
      <List  >
        { betsList.map( (bet, key) => {
          //console.log(bet.id, bet);
        return(
            <ListItem key={bet.key} style={{textAlign:'left'}}>
            <ListItemText className='text-left' primary={
          <Typography style={{fontWeight:'bold'}}  gutterBottom>
          {shortAddress(bet.key)}
        </Typography>
        }  />
        <ListItemText className='text-left' style={{textAlign:'left'}} primary={
          <Typography style={{fontWeight:'bold'}}  gutterBottom>
          {convertFromWei(bet.amount, 'Ether')} {bet.currency}
        </Typography>
        }  />
        <ListItemSecondaryAction>
        <Button variant="outlined" style={{fontWeight:'bold', color:'white',backgroundColor:theme.palette.blue.main}}>
  Join bet
</Button>
        </ListItemSecondaryAction>
          </ListItem>          
        )
      })}
    </List>
      </CardContent>
      </Card></div>
    );
}