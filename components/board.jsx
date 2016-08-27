import React from 'react';
import Tile from './tile.jsx';

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {tiles: [0,0,0,0], blinkArray: this.props.board, len: this.props.board.length}
    this.blinkArray = Array.from(this.props.board);
    this.renderTiles = this.renderTiles.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick, 500);
  }

  componentWillReceiveProps(newProps){
    this.state.blinkArray = newProps.board;
    this.state.len = newProps.board.length;
    this.intervalId = setInterval(this.tick, 500);
  }

  tick(){
    let newTiles = [0, 0, 0, 0];
    if (this.state.len === 0){
      this.setState({tiles: newTiles});
      clearInterval(this.intervalId);
    }
    this.state.len -= 1;
    let litTile = this.state.blinkArray[this.state.len];
    newTiles[litTile] = 1;
    this.setState({tiles: newTiles});
  }

  renderTiles(){
    const tiles = this.state.tiles;
    const colors = ['yellow','green', 'orange','mahogany'];
    return tiles.map( (onoff, i) => {
      let lit = onoff == 1 ? "ON" : "OFF";
      return (
        <div className="tile" key={`onoff-${i}`}>
          <Tile
            onoff={lit}
            keys={i}
            color={colors[i]}
            updateGame={this.props.updateGame}
            />
        </div>
      );
    });
  }

  render(){
    return (
      <div className="board">
        {this.renderTiles()}
      </div>
    );
  }
};

export default Board;
