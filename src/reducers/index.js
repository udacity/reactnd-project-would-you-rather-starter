import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";

const rootReducers = combineReducers({
  authedUser,
  questions,
  users,
});
export default rootReducers;
