import React from 'react';
import Tile from './tile.jsx';

import * as Memory from '../memory_game';
import Board from './board.jsx';
import Level from './level.jsx';

class Game extends React.Component {

  constructor(props){
    super(props);
    const memory = new Memory.MemoryGame(this.props.level);
    this.state = {blinkSequence: [], memory: memory, level: this.props.level};
    this.startGame = this.startGame.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  startGame(){
    let blinks = this.state.memory.generateSequence();
    this.setState({blinkSequence: blinks});
  }

  updateGame(tile){
    let result = this.state.memory.setGuess(tile);
    if (result !== -1){
      this.setState({blinkSequence: [], level: this.state.memory.level});
    }
  }

  render(){
    return (
      <div className="game">
        <Board
          board={this.state.blinkSequence}
          updateGame={this.updateGame}/>

        <div className="dashboard">
        <button onClick={this.startGame}>Start</button>
        <Level level={this.state.memory.level} />
        </div>
      </div>
    );
  }
};

export default Game;
