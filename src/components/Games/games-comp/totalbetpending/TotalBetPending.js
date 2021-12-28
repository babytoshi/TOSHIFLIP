import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

import "./totalBetPending.css";
import {convertNumberToCurrency } from '../../../../methods/Methods';
import { Card,  } from "@mui/material";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles( () => ({
  root: {
    textAlign: "center",
    padding:30,
  },
  title: {
    fontSize:{xs:25, md:30},
    fontWeight:"bold",
  },
  label: {
    fontSize:{xs:"7px", md:"20px"},
    fontWeight:500,
    marginBottom:"20px",
  },
  totalBet: {
    fontSize:"30px",
    fontWeight:900,
  },

}));

export default function TotalBetPending(props){
  const theme = useTheme();
  const {totalValueFlip} = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} sx={{ borderRadius: 10, background:theme.palette.blue.main, color:theme.palette.white.main }} elevation={5}>
      <Grid container columns={{xs:12, sm:12, md:12}} direction="row" 
      justifyContent='center'>
        <Grid item xs={12} sm={12} md={12} mb={2}>
        <Typography fontSize={{xs:25, md:30}} fontWeight={900} >TAKE YOUR CHANCE</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} mb={2}>
        <Typography fontSize={{xs:15, md:20}} fontWeight={600} >TOTAL PENDING FLIPS</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={8} mb={2} style={{background: theme.palette.orange.main, borderRadius:10}} p={1}>
        <Typography fontSize={{xs:25, md:35}} fontWeight={900} >{convertNumberToCurrency(totalValueFlip, 2)}</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} mb={2}>
        <Typography fontSize={{xs:15, md:20}} fontWeight={600} >TO WIN NOW !!!</Typography>
        </Grid>
      </Grid>
      
    </Card>
  );
};

