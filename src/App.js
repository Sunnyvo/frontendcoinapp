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
          this.props.apiCable.platforms = this.props.apiCable.subscriptions.create({channel: 'PriceChannel'},{
            connected: () => { console.log(" hello Guy we got the connected") },
            disconnected: () => { console.log("disconnected") },
            received: (data) => {
              // debugger
              data = JSON.parse(data.data)
              console.log(data)
              this.setState({
                loading: true
              })
              this.props.dispatch(updatePlatforms(data.platforms ,this.props.activePlatform))
            }
        }
        )
        }
      }
    })
    // .then(() =>{
    //   this.setState({
    //     loading: true
    //   })
    // })
  }


  render() {
    if (this.state != null && this.state.loading ==true)
    return (
      <div className="App">
        <PlatformList/>
        <CoinList/>
      </div>
    );
    else
    return(
      <div>
        isLoading
      </div>

    )
  }
}

export default  connect(mapStateToProps)(App);
