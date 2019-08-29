import React, {Component} from 'react';
import Grandchild from './Grandchild'


class Child extends Component{
  constructor(){
    super()
    // console.log("Constructor from Child")
  }

  componentDidMount(){
    // console.log("CDM from Child")
  }

  componentWillUnmount(){
    // console.log("I am dead... - Child")
  }

    render(){
      // console.log("Render from Child")
        return(<div>
              {/* <h3>{this.props.todo.title}</h3> */}
              <Grandchild/>
             </div>)

    }
}

export default Child