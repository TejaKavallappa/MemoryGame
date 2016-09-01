import React from 'react';
import Modal from 'react-modal';

import * as Memory from '../memory_game';
import Board from './board.jsx';
import Level from './level.jsx';
import Tile from './tile.jsx';
import ModalMessage from './modal_message.jsx';

const modalStyle = {
  overlay: {
  position        : 'fixed',
  top             : 0,
  left            : 0,
  right           : 0,
  bottom          : 0,
  backgroundColor : 'rgba(255, 255, 255, 0.5)'
}
}

class Game extends React.Component {

  constructor(props){
    super(props);
    const memory = new Memory.MemoryGame(this.props.level);
    this.state = {blinkSequence: [],
      memory: memory,
      level: this.props.level,
      modalOpen: false,
      win: false};
    this.startGame = this.startGame.bind(this);
    this.updateGame = this.updateGame.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  startGame(){
    let blinks = this.state.memory.generateSequence();
    this.setState({blinkSequence: blinks});
  }

  updateGame(tile){
    let result = this.state.memory.setGuess(tile);
    if (result !== -1){
      this.setState({blinkSequence: [],
        level: this.state.memory.level,
        modalOpen: true,
        win: result});
    }
  }

  closeModal(){
    this.setState({modalOpen: false})
  }

  render(){
    let message = this.state.win ? "You got that right!" : "Sorry, that was incorrect."
    return (
      <div id="game">
        <Board
          board={this.state.blinkSequence}
          updateGame={this.updateGame}/>

        <div className="dashboard">
        <button onClick={this.startGame}>Start</button>
        <Level level={this.state.memory.level} />

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className="modal"
          style={modalStyle}>
            <ModalMessage
              message={message}
              level={this.state.memory.level}/>
            <button onClick={this.closeModal}>Close</button>
        </Modal>

        </div>
      </div>
    );
  }
};

export default Game;
