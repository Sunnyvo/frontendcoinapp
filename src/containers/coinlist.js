import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container,Title, Field , Label} from 'bloomer';
import Chart from '../Chart';
import { getData } from '../utils'
// import {LineChart, Line, XAxis, CartesianGrid, YAxis, BarChart, Bar} from 'recharts'
import { TypeChooser } from "react-stockcharts/lib/helper";
class CoinList extends Component {

  componentDidMount() {
		getData().then(data => {
      debugger
			this.setState({ data })
		})
	}
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
        if (this.state == null) {
          return <div>Loading...</div>
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
            <TypeChooser>
              {type => <Chart type={type} data={this.state.data} />}
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