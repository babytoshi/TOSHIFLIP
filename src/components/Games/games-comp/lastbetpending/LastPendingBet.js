import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@mui/material/Card";
import PendingBetTable from "./PendingBetTable";
import "./lastPendingBet.css";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: 30,
    marginTop: 35,
  },
});

export default function LastPendingBet(props) {
  const classes = useStyles();
  const {ethereum, player, pendingFlips, updateFlips} = props;
  return (
    <Card className={classes.root} sx={{ borderRadius: 10 }} elevation={5}>
      <h2 className="pending-bet-h2">LAST PENDING FLIPS</h2>
      <span className="pending-bet-text">
        Clic on 'Join Flip' to enter in a flip game !
      </span>
      <PendingBetTable ethereum={ethereum} player={player} pendingFlips={pendingFlips} updateFlips={updateFlips} />
    </Card>
  );
}
