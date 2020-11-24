import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
      sushis: [],
      eatenSushis: [],
      money: 100,
      displayIndex: 0
    }
  

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      this.setState({
        sushis: sushis
      })
    })
  }

  fourSushis = () => {
    return this.state.sushis.slice(this.state.displayIndex, (this.state.displayIndex + 4))
  }

  moreSushis = (event) => {
    let newDisplayIndex = this.state.displayIndex + 4
    this.setState({
      displayIndex: newDisplayIndex
    })
  }

  eatSushi = (sushi) => {
    let updatedMoney = this.state.money - sushi.price

    if (!this.state.eatenSushis.includes(sushi) && updatedMoney >= 0 ) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi],
        money: updatedMoney
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.fourSushis()} moreSushis={this.moreSushis} eatSushi={this.eatSushi} eaten={this.state.eatenSushis}/>
        <Table money={this.state.money} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;