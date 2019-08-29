import React, {Component} from 'react';
import Child from './Child'
import { identifier } from '@babel/types';


class Parent extends Component{

  constructor(){
    super()
    this.state={
      click: false
    }
    // console.log("Constructor from Parent")
  }

  componentDidMount(){
    // console.log("CDM from Parent")
  }

  componentDidUpdate(prevProps, prevState){
    // console.log("I am updating - Parent component")
    // console.log(prevProps)
    // console.log(prevState)

  }

  change = () => {
    this.setState({
      click: !this.state.click
    })
  }


  
    render(){
      // console.log("Render from Parent")
        return(<div>
          <button onClick={this.change}>Click</button>
          {this.state.click ? <Child /> : null}
          {/* {this.props.todos.map(todo => <Child  todo={todo}/> )} */}
        </div>)

    }
}

export default Parent