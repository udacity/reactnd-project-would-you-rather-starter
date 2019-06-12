import { combineReducers } from 'redux';
import users from './users';
import * as loggedInUserId  from './loginUser';

export default combineReducers({
  users,
  loggedInUserId
});
