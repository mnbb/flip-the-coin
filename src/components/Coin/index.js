import React from 'react';

const FACES = ['HEAD', 'TAILS'];
const SPINNING = 'SPINNING';
const ROTATION_TIME = 1500;
const IMAGES = {
  'HEAD': '/images/head-coin.png',
  'TAILS': '/images/tails-coin.png',
  'SPINNING': '/images/spinning-coin.png',
}

class Coin extends React.Component { 
    state = { 
      facing: FACES[0],
      selected: undefined
    };

    flip = () => {
        this.setState({ facing: SPINNING });
        setTimeout(
            this.getResult,
            ROTATION_TIME
        );
    }

    getResult = () => {
        let randomIndex = Math.floor(Math.random() * FACES.length);
        let selected = this.state.selected
        this.setState({ facing: FACES[randomIndex], selected: undefined });
        this.props.returnResult(FACES[randomIndex] === selected)
    }

    isSpinning = () => {
        return this.state.facing === SPINNING;
    }

    select = option => {
      if (this.isSpinning()){
        this.setState( {selected:option} )
      }
    }

    render() {
        return (
            <div className="coin-holder">
              <img onClick={this.flip}
                    src={ IMAGES[this.state.facing] }
                    alt="coin"
                    className={ "coin" + (this.isSpinning() ? '-spin' : '') }
              />
              <div>
              <img 
                src={IMAGES['HEAD']}
                alt="head"
                onClick={() => this.select('HEAD')} 
                className={this.state.selected === 'HEAD' ? 'selected' : ''}
              />
              <img 
                src={IMAGES['TAILS']} 
                alt="tails" 
                onClick={() => this.select('TAILS')} 
                className={this.state.selected ===  'TAILS'? 'selected' : ''}
              />
              </div>
            </div>
        );
    }
}

export default Coin;
