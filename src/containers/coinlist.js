import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container,Title, Field , Label} from 'bloomer';
import {Line} from 'react-chartjs';
import Chart from 'chart.js';


class CoinList extends Component {
  createListCoins(){
    console.log(this.props);
    return this.props.platform.coins.map(
      (coin) => {
        return(
          <Field isGrouped
          key={coin.id}
          >
            <Label> {coin.name} </Label>
            <p> {" : " + coin.price[0]}</p>
            <div>{this.lineChart(coin.price)}</div>
          </Field>
        )
    }
    )
  }
  lineChart(chartData){
    return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
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