import React from 'react'
import ReactDOM from 'react-dom'
import App from './Containers/App'
import Reducers from './Reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// const rootReducer = combineReducers({ reducer
let store = createStore(Reducers)

ReactDOM.render(
  // This allows us to use the store state in all the child components
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
