import { createStore } from 'redux';
import reducer from './reducers/index';
import middleware from './middleware';

const store = createStore(reducer, middleware);

export default store;