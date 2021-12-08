import { combineReducers } from "redux";

// Reducers
import usersReducer from "./users/reducer";
import questionsReducer from "./questions/reducer";
// ./Reducers

export default combineReducers({
  users: usersReducer,
  questions: questionsReducer,
});
