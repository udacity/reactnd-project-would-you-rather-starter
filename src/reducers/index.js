import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";

export default combineReducers({
  authedUser,
  questions,
  users
})