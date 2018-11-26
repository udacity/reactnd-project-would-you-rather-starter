import { combineReducers } from 'redux';
import userReducer from './userReducers'

const reducers = combineReducers({
    users: userReducer,
});

export default reducers;