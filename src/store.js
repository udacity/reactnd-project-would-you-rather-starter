import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import thunk from 'redux-thunk';
import {
    createLogger
} from 'redux-logger';
import userReducer from './reducers/userReducers'

import { _getUsers } from './data/_DATA';

const appReducers = combineReducers({
    users: userReducer,
});

const store = createStore(
    appReducers, 
    {
        users: _getUsers().then(function (users) {
            // console.log(res);
            return users;
        }, function (err) {
            console.log(err);
        })
    },
    applyMiddleware(createLogger(), thunk)
);

export default store;