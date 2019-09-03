import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [], // local copy for data
      displayStocks: [], //to display
      portfolioStocks: [],  // to display 
      displayPortfolio: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res =>  res.json())
    .then(data => { // check data
      this.setState({
        stocks: data,
        displayStocks: data
      })
    })
  }

  addPortfolio = (stock) => {
    // debugger
    // let newArr = this.state.portfolioStocks
    // newArr.push(stock)

    // this.setState({
    //   portfolioStocks: newArr
    // })

    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock],
      displayPortfolio: [...this.state.portfolioStocks, stock]
    })
  }

  removeStock = (stock) => {
    // debugger

    // let arr = this.state.portfolioStocks.filter(s => s !== stock) // just remove a stock

    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(s => s !== stock) 
    })
  }
  
  filterStocks = (type) => {

    if(type !== "All"){
      this.setState({
        displayStocks: this.state.stocks.filter(stock => stock.type === type),
        displayPortfolio: this.state.portfolioStocks.filter(stock => stock.type === type)
        
      })
    }else{
      this.setState({
        displayStocks: this.state.stocks,
        displayPortfolio: this.state.portfolioStocks
      })
    }
  }

  sortStocks = (sortBy) => {
    let arr = []
    switch(sortBy){
      case "Alphabetically":
        arr = this.state.displayStocks.sort((a,b) => a.name > b.name ? 1 : -1)
        break;
      case "Price":
          arr = this.state.displayStocks.sort((a,b) => a.price > b.price ? 1 : -1)
        break;
      default:
        console.log("Wrong choice")
    }
    this.setState({
      displayStocks: arr
    })
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} addPortfolio={this.addPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.displayPortfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
