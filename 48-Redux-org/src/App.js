import React, { Component } from "react";
import Count from './Count'

class App extends Component{
    state = {count: 0}

    increment = () => {
        this.setState({
            count: this.state.count + 1 // ++this.state.count
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1 
        })
    }


    render(){
        return(<div>
            {/* <Header count={this.state.count}/> */}
            <Count/>
        </div>)
    }
}

export default App