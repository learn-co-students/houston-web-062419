import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

// console.log(thunk)

// store.subscribe(() => {
//     console.log("new state:", store.getState())
//     console.log("----------------------")
// })

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

