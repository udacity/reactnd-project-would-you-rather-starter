import { combineReducers } from 'redux';

import auth from './auth'
import userReducer from './userReducers'
import questionReducer from './questionReducers'

const reducers = combineReducers({
    auth,
    users: userReducer,
    questions:questionReducer,
});

export default reducers;