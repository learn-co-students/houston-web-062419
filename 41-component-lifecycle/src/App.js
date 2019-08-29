import React, {Component} from 'react';
import Header from './Header'
import 'semantic-ui-css/semantic.min.css';
import Parent from './Parent'


class App extends Component{

  constructor(){
    super()
    this.state={
      isLoading: true,
      todos: [],
      search: ""
    }
    // console.log("Constructor from APP")
  }

  componentDidMount(){
    // console.log("CDM from APP")
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
      this.setState({
        todos: data,
        isLoading: false
      })

    })
  }

  searchChange = (e) => {
    this.setState({
      search: e.target.value
    }, () => {
      console.log(this.state.search)
    })

   
  }

  
  render(){
    // console.log(this.state.todos)
    // console.log("Render from APP")
    // this.setState({
    //   check: false
    // }) Never use it
    return (<div>
      <Header/>
    
      <input type="text" onChange={(e) => this.searchChange(e)}/>
      {/* {this.state.isLoading 
      ? <h1>Loading....</h1> 
      : <Parent todos={this.state.todos}/>
      } */}
      <Parent todos={this.state.todos}/>
    </div>
    )
  }
  
}

export default App;
