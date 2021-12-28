import React from 'react';
import { useTheme } from '@mui/material/styles';
import SimpleAccordion from "./caclulator-comp/QA";
import "./calculator.css";

function Calculator() {
  const theme = useTheme();

  return (
    <div className="calculator">
      <div className="calculator-title-div">
        <img
          alt="bitcoin"
          src="https://assets.coingecko.com/coins/images/1/thumb_2x/bitcoin.png?1547033579"
          className="calculator-token-img"
        />
        <h2 className="calculator-h2">Rewards Calculator</h2>
      </div>

      <div className="volume-div">
        <h3> 24h Volume in USD</h3>
        <span>Volume DATA from Moralis</span>
      </div>

      <div className="holding-div">
        <h3>YOUR BABYTOSHI HOLDING</h3>
        <label> Enter Amount :</label> <br />
        <input
          type="number"
          id="holdingAmount"
          placeholder="Enter Amount Here"
        />
      </div>

      <div className="estimated-div">
        <div className="estimated-solo-div">
          <h5>Estimated Daily Earnings</h5>
          <span className="estimated-dollar">$140</span>
          <div className="estimated-rewards-div">
            <span>0.000358</span>
            <img src="https://assets.coingecko.com/coins/images/1/thumb_2x/bitcoin.png?1547033579" />
          </div>
        </div>
        <div className="estimated-solo-div">
          <h5>Estimated Weekly Earnings</h5>
          <span className="estimated-dollar">$140</span>
          <div className="estimated-rewards-div">
            <span>0.000358</span>
            <img src="https://assets.coingecko.com/coins/images/1/thumb_2x/bitcoin.png?1547033579" />
          </div>
        </div>
        <div className="estimated-solo-div">
          <h5>Estimated Yearly Earnings</h5>
          <span className="estimated-dollar">$140</span>
          <div className="estimated-rewards-div">
            <span>0.000358</span>
            <img src="https://assets.coingecko.com/coins/images/1/thumb_2x/bitcoin.png?1547033579" />
          </div>
        </div>
      </div>

      <SimpleAccordion className="accordion" />
    </div>
  );
}

export default Calculator;
