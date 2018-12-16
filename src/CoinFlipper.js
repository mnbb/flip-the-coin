import React from 'react';
import './CoinFlipper.css';
import Coin from './Coin';

class CoinFlipper extends React.Component {
  render() {
    return (
      <div className="coin-flipper">
        <div className="coin-flipper-center">
          <span className="coin-flipper-label">TAP TO FLIP</span>
          <div className="coin-wrapper">
            <Coin />
          </div>
        </div>
      </div>
    );
  }
}

export default CoinFlipper;
