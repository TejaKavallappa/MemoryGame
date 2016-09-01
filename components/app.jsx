import React from 'react';

import NavBar from './nav_bar.jsx';
import Game from './game.jsx';


export default class App extends React.Component {
  render(){
    return(
      <div>
        <NavBar />
        <Game level={1} />
      </div>
    )
  }
}
