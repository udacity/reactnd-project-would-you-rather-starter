import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import Login from './components/Login'

const store = createStore(reducer, middleware)
window.store = store // TODO: delete

ReactDOM.render(
<Provider store={store}>
    < Login ></Login>
</Provider>,
  document.getElementById('root')
);
