import React, { Component } from "react";
import {connect} from 'react-redux'

import {increment, decrement, fetchBooks} from './actions/countActions'

class Count extends Component{

    componentDidMount(){
        this.props.fetchBooks()
        // fetch("https://www.googleapis.com/books/v1/volumes?q=subject:genre&maxResults=10")
        // .then(res => res.json())
        // .then(data => this.props.setBooks(data.items))
    }
   
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

            <ul>
                {this.props.books.map(b => <li>{b.volumeInfo.title}</li>)}
            </ul>
            </div>
            
        )
    }
}


const mapStateToProps = (state) => {
    // console.log("What is this?", something)
    return{
        test: "I don't know",
        count: state.count,
        books: state.books
    }

}

// const mapDispatchToState = (dispatch) => {
//     // console.log("What is this?", something)
//     return{
//         increment: (amount) => dispatch({type: "INCREMENT", amount}),
//         decrement: (amount) => dispatch({type: "DECREMENT", amount}),
//     }

// }

const objForDispatch  = {
    increment: increment, //increment
    decrement: decrement,
    fetchBooks: fetchBooks

} //way to refactor the code



export default connect(mapStateToProps, objForDispatch)(Count)