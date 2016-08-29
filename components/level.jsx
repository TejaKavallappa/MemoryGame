import React from 'react';


export default class Level extends React.Component {
  constructor(props){
    super(props);
    this.state = ({level: props.level})
  }

  componentWillReceiveProps(newProps){
    this.setState({level: newProps.level});
  }

  render(){
    return (
      <div className="btn">
        Level: {this.state.level}
      </div>
    );
  }
};
