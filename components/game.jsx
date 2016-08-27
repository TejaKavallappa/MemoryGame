import React from 'react';
import Tile from './tile.jsx';

import * as Memory from '../memory_game';
import Board from './board.jsx';

class Game extends React.Component {

  constructor(props){
    super(props);
    const memory = new Memory.MemoryGame(4);
    this.state = {blinkSequence: [], memory: memory};
    this.startGame = this.startGame.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  startGame(){
    let blinks = this.state.memory.generateSequence();
    this.setState({blinkSequence: blinks});
  }

  updateGame(tile){
    this.state.memory.updateUserarray(tile);
  }

  render(){
    return (
      <div>
      <Board
        board={this.state.blinkSequence}
        updateGame={this.updateGame}/>
      <button onClick={this.startGame}>Start</button>
      </div>
    );
  }
};

export default Game;
