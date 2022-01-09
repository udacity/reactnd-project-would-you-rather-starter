import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import middleware from './middleware';
import combineReducers from './reducers/combineReducers';
import {BrowserRouter as Router} from "react-router-dom";

const store = createStore(combineReducers,middleware)
ReactDOM.render(
 
  <React.StrictMode> 
    <Router>
    <Provider store={store}><App /></Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

