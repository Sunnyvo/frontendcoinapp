import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container,Title, Field , Label} from 'bloomer';
import {LineChart, Line, XAxis, CartesianGrid, YAxis} from 'recharts'

class CoinList extends Component {

  createListCoins(){
    return this.props.platform.coins.map(
      (coin) => {
        if (coin.prices.length > 0){
          var data = coin.prices.map((p,index) => {
            return {
              time: (40 -index*10) + "s ago",
              price: p.price
            }
          })
        }
        return(
          <div>
          <Field isGrouped
          key={coin.id}
          >
            <Label> {coin.name} </Label>
            <p> {" : " + coin.prices[0].price}</p>
          </Field>
          <Field>
            <LineChart width={600} height={300} data={data}>
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="time" />
              <YAxis />
            </LineChart>
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