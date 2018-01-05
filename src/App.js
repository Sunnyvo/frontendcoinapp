import React, { Component } from 'react';
import './App.css';
import PlatformList from "./containers/platformlist.js"
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello Sunny
        <PlatformList/>
      </div>
    );
  }
}

export default App;
