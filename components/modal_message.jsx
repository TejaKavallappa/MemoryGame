import React from 'react';

export default class ModalMessage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <p>{this.props.message}</p>
        <p>Going to level {this.props.level}</p>
      </div>
    );
  }
};
