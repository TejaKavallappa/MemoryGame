import React from 'react';

var classNames = require('classnames');

export default class Tile extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleClick(e){
    this.props.updateGame(this.props.keys);
  }

  toggle(){
    let toggle = this.props.onoff;
    toggle = toggle == "ON" ? "OFF" : "ON";
    console.log("toggle!");
  }

  render(){
    var tileClass = this.props.onoff;
    tileClass += " " + this.props.color;
    tileClass += " tile-div"
    return (
      <div className={tileClass}
        onClick={this.handleClick}
        onMouseDown={this.toggle}
        onMouseUp={this.toggle}>
      </div>
    );
  }
};
