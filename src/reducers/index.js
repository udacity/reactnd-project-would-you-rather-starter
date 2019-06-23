import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";
import logState from './logState'
import navi from './navi'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  questions,
  users,
  logState,
  navi,
  loadingBar: loadingBarReducer
})