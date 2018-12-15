import React from 'react';
import './Coin.css';
import coinImage from './Coin.png';

class Coin extends React.Component { 
    FACES = ['HEAD', 'TAILS'];
    state = { facing: this.getRandomFace() }

    flip = () => {
        this.setState({ facing: this.getRandomFace() });
    }

    getRandomFace = () => {
        let randomIndex = Math.floor(Math.random() * this.FACES.length);
        return this.FACES[randomIndex];
    }

    render() {
        return (
            <div className="coin-holder">
                <img src={coinImage} alt="coin" className="coin" />
            </div>
        );
    }
}

export default Coin;
