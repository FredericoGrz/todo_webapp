import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//Middlewares
//Inside a action Creator method be able to return an array instead of object (return more than one action)
import multi from 'redux-multi'
//If you send a promise in a action this middleware will wait to this promise finish to call the reducers
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

//Developer Stuff
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

//Production Stuff
//const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
)