import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App></App>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
