import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container,Title, Field , Label} from 'bloomer';
import Chart from '../Chart';

import { TypeChooser } from "react-stockcharts/lib/helper";

// import { timeParse } from "d3-time-format";

// const parseDate = timeParse("%Y-%m-%d");

class CoinList extends Component {


  componentDidMount() {

	}
  createListCoins(){
    return this.props.platform.coins.map(
      (coin) => {
        coin.prices.forEach(
          (price) => {
            price.date = new Date(price.date);
          }
        )
        coin.prices.columns = ["date", "open", "close", "low", "high"]
        console.log(coin.prices)
        return(
          <div>
              <Field isGrouped
              key={coin.id}
              >
                <Label> {coin.name} </Label>
                <p> {" : " + coin.prices[coin.prices.length-1].close}</p>
              </Field>
              <Field>
                <TypeChooser>
                  {type => <Chart type={type} data={coin.prices} />}
                </TypeChooser>
              </Field>
            </div>
        );
    }
    )
  }
  render(){
    if (this.props.platform == null) {
      return (<Title> Choose a Platform </Title>)
    }
    else
    return(
      <div>
        <Container>
          <Title> Platform details - Price of coin - {this.props.platform.name}</Title>

            {this.createListCoins()}

        </Container>
      </div>
    );

  }
}

function mapStateToProps(state){
  return{
    platform : state.activePlatform
  }
}
export default connect(mapStateToProps)(CoinList);