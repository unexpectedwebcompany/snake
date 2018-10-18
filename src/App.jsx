import React, { Component } from 'react';
import Board from './container/board';
import Puntuation from './container/puntuation';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Board />
        <Puntuation />
      </React.Fragment>
    );
  }
}
export default App;
