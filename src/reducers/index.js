import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";

const rootReducers = combineReducers({
  authedUser,
  users,
  questions,
});
export default rootReducers;
