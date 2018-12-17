import React from 'react';

import Coin from '../Coin';

const OUT = 'AFUERA'
const WIN = 'GANÓ'
const IN = 'ADENTRO'


class GameBoard extends React.Component {
  state= {
    index:0,
    winners:[],
    out:[],
    looser: undefined
  }
  
  nextIndex = () => {
      let newIndex = this.state.index + 1
      while (this.state.out.includes(newIndex)){
        newIndex  += 1
      }
      return newIndex
  }

  updateResult = win => {
    if (win){
      this.setState(odlState =>{
        return { winners: odlState.winners.concat(this.state.index) }
      })
    }
    let next = this.nextIndex()
    if (next === this.props.players.length){
      this.setState(oldState => {
        let out = oldState.winners.concat(oldState.out)
        return { 
          index: 0,
          winners:[],
          out: (out === this.props.players.length)? oldState.out : out,
          looser: this.getLooser(out)
        }
      })
    } else {
      this.setState({index:next})
    }
  }

  getLooser = out => {
    if (out.length === this.props.players.length - 1){
      for (let i =0; this.props.players.length; i++){
        if (!out.includes(i)){
          return this.props.players[i]
        }
      }
    } else {
      return undefined
    } 
    
  }

  getPlayerStatus = playerIndex => {
    if (this.state.out.includes(playerIndex)){
      return OUT
    } else if (this.state.winners.includes(playerIndex)) {
      return WIN
    }
    return IN
  }
  
  render() {
    if (this.state.looser){
      return (
      <div>
        <h1>Lava {this.state.looser} !</h1>
        <button onClick={this.props.resetGame} >Reset Game</button>
      </div>
      )   
    } else {
      return (
        <div>
          <ul>
            {this.props.players.map((player, idx) => <li key={player}>{player} - <span className={ this.getPlayerStatus(idx) }> {this.getPlayerStatus(idx)} </span></li>  )}   
          </ul>
          <h2>Turno de: {this.props.players[this.state.index]}</h2>
          <Coin returnResult={this.updateResult}/>
          <button onClick={this.props.resetGame} >Reset Game</button>
        </div>
      )
    }
  }
}

export default GameBoard;