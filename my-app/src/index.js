import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import middleware from './middleware';
import combineReducers from './reducers/combineReducers';

const store = createStore(combineReducers,middleware)
ReactDOM.render(
 
  <React.StrictMode> 
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

