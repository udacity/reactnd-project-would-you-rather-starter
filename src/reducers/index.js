import { combineReducers } from 'redux';
import users from './users';
import loggedInUserId from './loggedInUserId';

export default combineReducers({
  users,
  loggedInUserId
});
