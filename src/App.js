import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import PlatformList from './containers/platformlist.js';
import CoinList from './containers/coinlist.js';
import {updatePlatforms} from './action/action.js';
import Navigation from './components/Navigation';
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
        fetch('http://localhost:3000/prices', {
          method: 'get',
        })
        .then((response)=> response.json())
        .then((data) => {
          console.log(data)
          this.props.dispatch(updatePlatforms(data.platforms ,data.platforms[0]))
          this.setState({
            loading: true
          })
        })
        if (!this.props.apiCable.platforms) {
          console.log('osh somthing is wrong')
          this.props.apiCable.platforms = this.props.apiCable.subscriptions.create({channel: 'PriceChannel'},{
            connected: () => { console.log(" hello Guy we got the vytgygt") },
            disconnected: () => {
              console.log("disconnected")
              window.location.reload()
            },
            received: (data) => {
              console.log('hi')
              data = JSON.parse(data.data)
              console.log(data)
              console.log(this.props.activePlatform)
              if(this.props.activePlatform == null)
                {
                  this.props.dispatch(updatePlatforms(data.platforms ,data.platforms[0]))
                }
              else
              this.props.dispatch(updatePlatforms(data.platforms ,this.props.activePlatform))
            }
        }
        )
        }
      }
      else window.location.reload()

    })

  }

  render() {
    if (this.state != null && this.state.loading ==true)
    return (
      <div className="App">
        <header className="Header" style={{marginBottom: "30px"}}>
          <Navigation/>
        </header>
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
