import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      displayPets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = () => {
    let url = "/api/pets"
    // let typeUrl = "/api/pets?type="

    // if(this.state.filters.type === "all"){
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       pets: data
    //     })
    //   })
    // }else{
    //   fetch(typeUrl+this.state.filters.type)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       pets: data
    //     })
    //   })
    // }

    if(this.state.pets.length === 0){
      fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data, 
          displayPets: data //intially display all the pets
        })
      })
    }
    else{
      
      // let pets = []
      if(this.state.filters.type === "all"){
        // pets = this.state.pets
        this.setState({
          displayPets: this.state.pets
        })
      }else{
        // pets = this.state.pets.filter(pet => pet.type === this.state.filters.type)
        this.setState({
          displayPets: this.state.pets.filter(pet => pet.type === this.state.filters.type)
        })
      }

      // this.setState({
      //   displayPets: pets
      // })
    }
      
  }

  changeFilter = (e) => {
    // console.log(e.target)
    // debugger

    this.setState({
      filters:{
        type: e.target.value
      }
    })
  }

  adoptPet = (id) => {
    // debugger
    let pets = this.state.pets.map(pet => {
      if(pet.id === id){
        pet.isAdopted = true
      }
      return pet
    })

    this.setState({
      pets //pets:pets
    })

    // this.setState({
    //   pets: this.state.pets.map(pet => {
    //     return pet.id === id ? {...pet, isAdopted: true} : pet
    //   })
    // })

    // debugger
  }

  render() {

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeFilter={this.changeFilter} fetchPets={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.displayPets} adopt={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
