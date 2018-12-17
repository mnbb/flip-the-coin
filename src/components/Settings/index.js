import React from 'react';

class Settings extends React.Component {
  state= { text:'' }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.addPlayer(this.state.text)
      this.setState({ text: '' })
    }
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Quien está?</h1>
        <div>
          <input value={this.state.text} onChange={this.handleChange} type="text" onKeyPress={this.handleKeyPress}/>
          <button onClick={this.props.resetGame} > Resetear </button>
          <button onClick={this.props.startGame} > Empezar </button>
        </div>
        <h2>Jugadores:</h2>
        <ul>
          {this.props.players.map( player => <li key={player}>{player}</li> )}
        </ul>
      </div>
    )
  }
}

export default Settings;
