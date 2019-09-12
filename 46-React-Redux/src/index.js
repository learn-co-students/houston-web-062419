import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'


let reducer = (state= {count: 0}, action ) => {

    console.log("current state:", state)
    console.log("action:", action)
    console.log('--------------')

    // if(action.type === 'toggle'){
    //     console.log("in reducer")
    //     return{
    //         test: !state.test
    //     }
    // }

    switch(action.type){
        case "INCREMENT":
            return{
                count: state.count + action.amount
            }
        case "DECREMENT":
            return{
                count: state.count - action.amount
            }
        default: 
        return{
                count: state.count
            }
        
    }


    // return{
    //     count: state.count
    // }

    
}



const store = createStore(reducer)
store.subscribe(() => {
    console.log("new state:", store.getState())
    console.log("----------------------")
})



// class App extends Component{
//     state = {count: 0}

//     increment = () => {
//         this.setState({
//             count: this.state.count + 1 // ++this.state.count
//         })
//     }

//     decrement = () => {
//         this.setState({
//             count: this.state.count - 1 
//         })
//     }


//     render(){
//         return(<div>
//             {/* <Header count={this.state.count}/> */}
//             <Count count={this.state.count} decrement={this.decrement} increment={this.increment}/>
//         </div>)
//     }
// }

// class Header extends Component{
//     render(){
//         return(<div>
//             {this.props.count}
//         </div>)
//     }
// }

// class Count extends Component{
//     componentDidMount(){
//         store.subscribe(() => {
//             this.setState({})
//         })
//     }

//     // testChange = () => {
//     //     store.dispatch({type: 'toggle'})
//     // }

//     increment = (amount) => {
//         store.dispatch({type: "INCREMENT", amount}) //amount: amount
//     }

//     decrement = (amount) => {
//         store.dispatch({type: "DECREMENT", amount})
//     }


//     render(){
//         return(
//             <div>
//                 {/* <button onClick={() => this.testChange()}>Change</button> */}
//                 <p>{store.getState().count}</p>
//             <button onClick={() => this.decrement(1)}> - </button>
//             <button onClick={() => this.increment(1)}> + </button>
//             <button onClick={() => this.decrement(2)}> - 2 </button>
//             <button onClick={() => this.increment(5)}> + 5 </button>
//             </div>
            
//         )
//     }
// }



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
