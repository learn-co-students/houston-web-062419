import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filter from './Filter'

class App extends Component {
  constructor(){
    super()
    hogs.map(hog => hog.show = true)
    // let h = hogs.map(hog => {return {...hog, show: true}})
    // console.log(hogs, h)
    this.state = {
      displayHogs: hogs,
      hogs //hogs: hogs
    }
  }

  filterHogs = () => {
    let filteredHogs = this.state.hogs.filter(hog => hog.greased === true)

    this.setState({
      displayHogs: filteredHogs
    })
  }

  sortHogsNames = () => {
    let sortedHogs = this.state.hogs.sort((a,b) => (a.name > b.name) ? 1 : -1)

    this.setState({
      displayHogs: sortedHogs
    })
  }

  sortHogsWeight = () => {
    let sortedHogs = this.state.hogs.sort((a,b) => (a.weight > b.weight) ? 1 : -1)

    this.setState({
      displayHogs: sortedHogs
    })
  }

  handleHogs = (hog) => {
    // debugger

    let hogs = this.state.hogs.map(h => {
      if(h === hog){
        h.show = false
      }
      return h
    })

    this.setState({
      displayHogs: hogs.filter(h => h.show === true)
    })
  }

  showAll = () => {
    this.setState({
      displayHogs: this.state.hogs
    })
  }


  render() {
    return (
      <div className="App">
          < Nav />
          <Filter filterHogs={this.filterHogs} sortHogsNames={this.sortHogsNames} sortHogsWeight={this.sortHogsWeight} showAll={this.showAll}/>
          <HogContainer hogs={this.state.displayHogs} handleHogs={this.handleHogs}/>

      </div>
    )
  }
}

export default App;
