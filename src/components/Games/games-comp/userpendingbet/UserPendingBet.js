import React from 'react';
import "./userPendingBet.css";
import { Card } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import UserPendingTable from "./UserPendingTable";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: 30,
    marginTop: 20,
  },
});

export default function UserPendingBet(props){
  const classes = useStyles();
  const {ethereum, player, pendingPlayerFlips, updateFlips} = props;

  return (
    <div>
      <Card className={classes.root} sx={{ borderRadius: 10 }} elevation={5}>
        <h2 className="pending-bet-h2">YOUR PENDING FLIPS</h2>
        <UserPendingTable ethereum={ethereum} player={player} pendingPlayerFlips={pendingPlayerFlips} updateFlips={updateFlips} />
      </Card>
    </div>
  );
};

//export default UserPendingBet;
