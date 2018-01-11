import React, { Component } from 'react';
import './App.css';
import PlatformList from "./containers/platformlist.js";
import CoinList from './containers/coinlist.js';


class App extends Component {
  componentDidMount(){
    fetch('http://localhost:3000/sessions', {
      method: 'post',
      headers: {
        'Authorization': 'Basic '+btoa('username:password'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'email=phuvt@bitconet.com&password=12345678'
    })
    .then((response)=> response.json())
    .then((responseData) => {
      console.log(responseData.data.user.authentication_token);
      window.sessionStorage.setItem('key',responseData.data.user.authentication_token)
      this.setState({
        clientToken: responseData.data.user.authentication_token,
      });
    })
    

  }

  fetchAccessToken(){

  }

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
