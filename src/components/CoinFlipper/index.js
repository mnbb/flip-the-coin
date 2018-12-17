import React from 'react';

import GameBoard from '../GameBoard'
import Settings from '../Settings'

import MainHeader from './MainHeader'

class CoinFlipper extends React.Component {

  state = {
    started: false,
    players: []
  } 

  startGame = () => {
    this.setState({ started: true })
  }

  resetGame = () => {
    this.setState({ started: false, players:[]})
  }

  addPlayer = newPlayer => {
    this.setState(oldState => ({ players: oldState.players.concat(newPlayer) }))
  }

  render() {
    return (
      <div className="main">
        <MainHeader/>
        { this.state.started? 
          <GameBoard 
            players={this.state.players}
            resetGame={this.resetGame}
          />: 
          <Settings 
            players={this.state.players} 
            addPlayer={this.addPlayer}
            resetGame={this.resetGame}
            startGame={this.startGame}
          /> }
      </div>
    )
  }
}

export default CoinFlipper;
