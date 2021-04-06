
import { combineReducers } from 'redux';
import { questions } from './questions';
import { users } from './users' ;
import { signUser } from './signUser';

export default combineReducers({
    questions,
    users, 
    signUser
})