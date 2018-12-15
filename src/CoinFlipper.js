import React from 'react';
import './CoinFlipper.css';
import Coin from './Coin';

class CoinFlipper extends React.Component {
  render() {
    return (
      <div className="coin-flipper">
        <div className="coin-flipper-holder">
          <span>TAP TO FLIP</span>
          <Coin />
        </div>
      </div>
    );
  }
}

export default CoinFlipper;
