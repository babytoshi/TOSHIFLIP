
import React, {useState,} from 'react';
import "./pendingBetTable.css";
import { shortAddress, convertFromWei, formatNumber, DEFAULT_CURRENCY } from '../../../../methods/Methods';
import DialogJoinBet from "../joinflip/DialogJoinBet";

export default function PendingBetTable(props){
  const {ethereum, player, pendingFlips, updateFlips} = props;
  const [selectedCurrency, setSelectedCurrency] = useState(DEFAULT_CURRENCY);
  const [openAnimation, setOpenAnimation] = useState(false);
  const [resultFlip, setResultFlip] = useState(true);

  const [selectedFlip, setSelectedFlip] = useState();

  async function initAnim(_selectedCurrency, _openAnimation, _resultFlip, _flip){
    setSelectedCurrency(_selectedCurrency);
    setOpenAnimation(_openAnimation);
    setResultFlip(_resultFlip);
    setSelectedFlip(_flip);
  }

  const updateSelectedFlip = (_flip) => {
    setSelectedFlip(_flip);
  };

  const closeDialog = () => {
    setOpenAnimation(false);
  };

  return (
    <div className="pending-bet-table">

        <DialogJoinBet ethereum={ethereum} player={player} updateFlips={updateFlips} selectedCurrencyImage={selectedCurrency.image} openAnimation={openAnimation} closeDialog={closeDialog} resultFlip={resultFlip} selectedFlip={selectedFlip} updateSelectedFlip={updateSelectedFlip} />

      <div className="table-label">
        <span className="player-span">FLIP</span>
        <span>FLIP AMOUNT</span>
        <span className="blank-span">blank</span>
      </div>
      <hr />
        {
          pendingFlips.map( (flip, key) => {
            return (
              <div className="table-data" key={"player-span"+key}>
                <span className={"player-span"+key}>{shortAddress(flip.key, 3)}</span>
                <div>
                  <img src={flip.currency.image} alt="flip logo" className="btc-logo" />
                  <span>{formatNumber(convertFromWei(flip.amount, flip.currency.ether), 4)}</span>
                </div>
                <button className="join-bet-btn" style={{visibility: flip.player1.toLowerCase()===player.key ? 'hidden' : 'visible'}} onClick={()=>{
                  initAnim(flip.currency, true, resultFlip ? false : true, flip);
                }}>JOIN FLIP</button>

              </div>
            )
          })
        }


    </div>
  );
};
