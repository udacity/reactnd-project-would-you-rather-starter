import { combineReducers } from 'redux';
import userReducer from './userReducers'
import questionReducer from './questionReducers'

const reducers = combineReducers({
    users: userReducer,
    questions:questionReducer
});

export default reducers;