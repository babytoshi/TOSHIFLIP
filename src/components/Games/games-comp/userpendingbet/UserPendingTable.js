import React from 'react';
import "./userPendingTable.css";
import { shortAddress, convertFromWei, formatNumber, cancelFlip} from '../../../../methods/Methods';

export default function UserPendingTable(props){
  const {ethereum, player, pendingPlayerFlips, updateFlips} = props;

  return (
    <div className="pending-bet-table">
      <div className="table-label">
        <span className="player-span">FLIP</span>
        <span>FLIP AMOUNT</span>
        <span className="blank-span">blank</span>
        <span className="blank-span">blank</span>
      </div>
      <hr />
      {
          
          pendingPlayerFlips.map( (flip, key) => {
            return (
              <div className="table-data" key={"player-span"+key}>
                <span className={"player-span"+key}>{shortAddress(flip.key, 2)}</span>
                <div>
                  <img src={flip.currency.image} alt="flip logo" className="btc-logo" />
                  <span>{formatNumber(convertFromWei(flip.amount, flip.currency.ether), 4)}</span>
                </div>
                <div className="btn-div">
                  <button className="join-bet-btn">PLAY</button>
                  <button className="cancel-btn" onClick={async ()=>{
                    console.log({FLIPADD: flip.key});
                    if( ethereum ){
                        await cancelFlip(ethereum, player, flip.key).then( async () => {
                            await updateFlips();
                        });                        
                    }
                  }}>x</button>
                </div>
                

              </div>
            )
          })
        }
    </div>
  );
};