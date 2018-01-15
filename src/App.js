import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import PlatformList from "./containers/platformlist.js";
import CoinList from './containers/coinlist.js';
import {updatePlatforms} from './action/action.js'
const mapStateToProps = (state = {}) => {
  return {...state};
};

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
      window.sessionStorage.setItem('key',responseData.data.user.authentication_token)
    })
    .then(() =>{

      let token = window.sessionStorage.getItem('key')
      if (token !== "")
      {
        if (!this.props.apiCable.platforms) {
          console.log('osh somthing is wrong')
          this.props.apiCable.platforms = this.props.apiCable.subscriptions.create('PriceChannel',{
            connected: function() { console.log(" hello Guy we got the  connected") },
            disconnected: function() { console.log("fuck yeah you lost me!") },
            received: (data) => {
              console.log('reeeeee!')
              this.props.dispatch(updatePlatforms(data ,this.props.activePlatform))
            }
          })
        }
      }

    })
  }


  render() {

    // const {apiCable} = this.props
    return (
      <div className="App">
        <PlatformList/>
        <CoinList/>
      </div>
    );
  }
}

export default  connect(mapStateToProps)(App);
