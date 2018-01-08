import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container,Title, Field , Label} from 'bloomer';
import {LineChart, Line, XAxis, CartesianGrid, YAxis} from 'recharts'

class CoinList extends Component {

  createListCoins(){
    console.log(this.props);
    return this.props.platform.coins.map(
      (coin) => {

        if (coin.price.length > 0){
          var data = coin.price.map((p,index) => {
            return {
              time: (40 -index*10) + "s ago",
              price: p
            }
          })
        }
        console.log(data)
        return(
          <div>
          <Field isGrouped
          key={coin.id}
          >
            <Label> {coin.name} </Label>
            <p> {" : " + coin.price[0]}</p>
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