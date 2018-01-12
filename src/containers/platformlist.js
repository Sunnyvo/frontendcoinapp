import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
import "bulma/css/bulma.css";
import { Container, Title } from 'bloomer';
import {selectPlatform } from '../action/action'
class PlatformList extends Component{
  createListItems(){
    console.log('haha :) I have platforms:', this.props.platforms)
    return this.props.platforms.map(
      (platform) => {
        return (
          <li
            key={platform.id}
            onClick={() => this.props.selectPlatform(platform)}
          >
          {platform.name}
          </li>
        )
      })
  }
  render(){
    return(
      <div>
        <Container>
          <Title> List Platform:</Title>
          <ul>
            {this.createListItems()}
          </ul>
        </Container>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectPlatform: selectPlatform},dispatch)
}

function mapStateToProps(state){
  return {
    platforms: state.platforms,
  };
}



export default connect(mapStateToProps,matchDispatchToProps)(PlatformList);
// export default {PlatformList};

