import React from 'react';
import paintings from './painting'
import 'semantic-ui-css/semantic.min.css';
// import {Test} from './NavBar'
import NavBar from './NavBar'
import PaintingList from './PaintingList'
import PaintingForm from './PaintingForm'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PaintingCard from './PaintingCard'


class App extends React.Component{

  constructor(){
    super()
    // console.log("I am constructor!")
    this.state = {
      list: true,
      paintings: paintings
    }
  }

  changeList = () => {

    this.setState({
      list: !this.state.list
      // temp: "I want this state"
    })

  }

  addPainting = (e) => {
    e.preventDefault()
    // console.log(e)
    // debugger

    let newPainting = {
      title: e.target[0].value,
      image: e.target[1].value,
      artist: {
        name: e.target[2].value
      },
      votes: 0
    }

    // console.log(this.state.paintings)
    let newArr = [...this.state.paintings, newPainting]

    // let newArr = this.state.paintings
    // newArr.push(newPainting)

    this.setState({
      paintings: newArr,
      list: !this.state.list //true
    }, () => console.log(this.state.list)) //setState is async

  }

  render(){
    // console.log(BrowserRouter)

    return (
   
      <BrowserRouter>
    <div>
        <NavBar />
        {/* <Route exact path="/paintings" render={() => <PaintingList paintingObjs={this.state.paintings} />}/> */}
        <Switch>


        <Route path="/paintings/new" render = {(routeProps) =><PaintingForm {...routeProps} add={this.addPainting} /> } />

        <Route path="/paintings/:id" render={(routeProps) => <PaintingCard {...routeProps} paintings={this.state.paintings}/> } /> 

        <Route path="/paintings" render={() => <PaintingList paintingObjs={this.state.paintings} />}/>
    
        </Switch>
        

    </div>

     {/* <button className="ui inverted primary button" onClick={this.changeList}>Add Painting</button> */}

      {/* <NavBar /> */}
      {/* {this.state.list 
      ? <PaintingList paintingObjs={this.state.paintings}/>
      : <PaintingForm add={this.addPainting} />
      } */}
    </BrowserRouter>
  )};
}

export default App;
