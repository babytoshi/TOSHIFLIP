import React, {useState, useEffect} from 'react';
import "./games.css";
import TotalBetPending from "./games-comp/totalbetpending/TotalBetPending";
import LastPendingBet from "./games-comp/lastbetpending/LastPendingBet";
import CreateYourBet from "./games-comp/createbet/CreateYourBet";
import UserPendingBet from "./games-comp/userpendingbet/UserPendingBet";
import { getTotalValueFlips, getPendingFlips, getPendingPlayerFlips, } from '../../methods/Methods';
import Grid from '@mui/material/Grid';
import Masonry from '@mui/lab/Masonry';

export default function Games(props){
  const { ethereum, player, } = props;
    const [pendingFlips, setPendingFlips] = useState([]);
    const [pendingPlayerFlips, setPendingPlayerFlips] = useState([]);
    const [totalValueFlip, setTotalValueFlip] = useState(0);

    useEffect(() => {
      updateFlips();
    }, [ethereum, player]);

    const updateFlips = async() => {
      let [_pendingFlips, _pendingPlayerFlips, ] =
      await Promise.all([getPendingFlips(),
        getPendingPlayerFlips(player), 
              ]);
      setPendingFlips(_pendingFlips);
      setPendingPlayerFlips(_pendingPlayerFlips);
      let _totalValueFlip = await getTotalValueFlips(_pendingFlips);
      setTotalValueFlip(_totalValueFlip);
    }

  return (
    <Grid container columns={{xs:12, sm:12, md:12}} columnSpacing={0} direction="row" alignItems="center" justifyContent={"center"}
        >
        <Grid item xs={12} sm={12} md={12}>
          <Masonry columns={{xs:1, sm:2, md:2}} spacing={0.5}  >
            <TotalBetPending totalValueFlip={totalValueFlip} />
            <CreateYourBet ethereum={ethereum} player={player} updateFlips={updateFlips} />
            <LastPendingBet ethereum={ethereum} player={player} pendingFlips={pendingFlips} updateFlips={updateFlips} />
            <UserPendingBet ethereum={ethereum} player={player} pendingPlayerFlips={pendingPlayerFlips} updateFlips={updateFlips} />
          </Masonry>
        </Grid>
    </Grid>
  );
};
