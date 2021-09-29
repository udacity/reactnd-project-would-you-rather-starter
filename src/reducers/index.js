import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";

const rootReducers = combineReducers({
  authedUser,
  users,
});
export default rootReducers;
