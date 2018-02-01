import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
import "bulma/css/bulma.css";
import { Container, Title } from 'bloomer';
import {selectPlatform } from '../action/action'
import { ListGroup, ListGroupItem } from 'reactstrap';
class PlatformList extends Component{
  createListItems(){
    return this.props.platforms.map(
      (platform) => {
        return (
          <ListGroupItem
            key={platform.id}
            onClick={() => this.props.selectPlatform(platform)}
          >
          {platform.name}
          </ListGroupItem>
        )
      })
  }
  render(){
    return(
      <div>
        <Container>
          <Title> List Platforms :</Title>
          <ListGroup>
            {this.createListItems()}
          </ListGroup>
        </Container>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectPlatform: selectPlatform}, dispatch)
}

function mapStateToProps(state){
  return {
    platforms: state.platforms,
  };
}



export default connect(mapStateToProps,matchDispatchToProps)(PlatformList);


