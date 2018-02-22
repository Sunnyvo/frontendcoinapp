import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
import "bulma/css/bulma.css";
import { Container, Title, MenuList, MenuLink } from 'bloomer';
import {selectPlatform } from '../action/action';
import {Nav, NavItem, Button} from 'reactstrap';
class PlatformList extends Component{
  createListItems(){
    return this.props.platforms.map(
      (platform) => {
        return (
          <NavItem
            key={platform.id}
            onClick={() => this.props.selectPlatform(platform)}
          >
          <Button color="info" style ={{margin : "5px"}}> {platform.name}  </Button>
          </NavItem>
        )
      }
    )
  }
  render(){
    return(
      <div>
        <Container>
          <Title> List Platforms :</Title>
          <Nav>
            {this.createListItems()}
          </Nav>
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


