import React, { Component } from 'react';
import './App.css';
import PlatformList from "./containers/platformlist.js";
import CoinList from './containers/coinlist.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PlatformList/>
        <CoinList/>
      </div>
    );
  }
}

export default App;
