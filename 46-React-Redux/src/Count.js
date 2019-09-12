import React, { Component } from "react";
import {connect} from 'react-redux'

class Count extends Component{
    // componentDidMount(){
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    // testChange = () => {
    //     store.dispatch({type: 'toggle'})
    // }

    // increment = (amount) => {
    //     store.dispatch({type: "INCREMENT", amount}) //amount: amount
    // }

    // decrement = (amount) => {
    //     store.dispatch({type: "DECREMENT", amount})
    // }


    render(){
        console.log(this.props)
        return(
            <div>
                {/* <button onClick={() => this.testChange()}>Change</button> */}
                <p>{this.props.count}</p>
            <button onClick={() => this.props.decrement(1)}> - </button>
            <button onClick={() => this.props.increment(1)}> + </button>
            <button onClick={() => this.props.decrement(2)}> - 2 </button>
            <button onClick={() => this.props.increment(5)}> + 5 </button>
            </div>
            
        )
    }
}


const mapStateToProps = (state) => {
    // console.log("What is this?", something)
    return{
        test: "I don't know",
        count: state.count
    }

}

const mapDispatchToState = (dispatch) => {
    // console.log("What is this?", something)
    return{
        increment: (amount) => dispatch({type: "INCREMENT", amount}),
        decrement: (amount) => dispatch({type: "DECREMENT", amount}),
    }

}

// const objForDispatch  = {
//     increment: (amount) => ({type: "INCREMENT", amount}),
//     decrement: (amount) => ({type: "DECREMENT", amount}),
// } way to refactor the code



export default connect(mapStateToProps, mapDispatchToState)(Count)