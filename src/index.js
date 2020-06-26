import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

let store;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
if (typeof composeEnhancers === 'function') {
  store = createStore(reducer, composeEnhancers(middleware))
} else {
  store = createStore(reducer, middleware)
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App></App>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
