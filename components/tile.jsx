import React from 'react';

var classNames = require('classnames');

export default class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state = ({toggle: props.onoff})
    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState({toggle: newProps.onoff});
  }

  toggle(e){
    let toggle = this.state.toggle;
    toggle = toggle == "ON" ? "OFF" : "ON";
    if (this.state.toggle === "OFF"){
      this.props.updateGame(this.props.keys);
    }
    this.setState({toggle: toggle});
  }

  render(){
    var tileClass = this.props.color;
    tileClass += " tile-div"
    tileClass += " " + this.state.toggle;
    return (
      <div className={tileClass}
        onMouseDown={this.toggle}
        onMouseUp={this.toggle}>
      </div>
    );
  }
};
