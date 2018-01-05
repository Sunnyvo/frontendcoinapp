import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
class PlatformList extends Component{
  render(){
    return(
      <div>
        <ul>
          <li> CoinBase </li>
          <li> Bittrex </li>
          <li> Ponotriex </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users,
  };
}


export default connect(mapStateToProps)(PlatformList);
// export default {PlatformList};

