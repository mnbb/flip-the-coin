import React from 'react';
import './Coin.css';
import headCoin from './head-coin.png';
import tailsCoin from './tails-coin.png';
import spinningCoin from './spinning-coin.png';

class Coin extends React.Component { 
    FACES = ['HEAD', 'TAILS'];
    SPINNING = 'SPINNING';
    ROTATION_TIME = 700;
    IMAGES = {
        'HEAD': headCoin,
        'TAILS': tailsCoin,
        'SPINNING': spinningCoin,
    }

    state = { facing: this.FACES[0] };

    flip = () => {
        this.setState({ facing: this.SPINNING });
        setTimeout(
            this.setRandomFace,
            this.ROTATION_TIME
        );
    }

    setRandomFace = () => {
        let randomIndex = Math.floor(Math.random() * this.FACES.length);
        this.setState({ facing: this.FACES[randomIndex] });
    }

    isSpinning = () => {
        return this.state.facing === this.SPINNING;
    }

    render() {
        return (
            <div className="coin-holder" onClick={ this.flip }>
                <img 
                    src={ this.IMAGES[this.state.facing] }
                    alt="coin"
                    className={ "coin" + (this.isSpinning() ? '-spin' : '') }
                />
            </div>
        );
    }
}

export default Coin;
