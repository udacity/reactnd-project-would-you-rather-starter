import { users } from "./users";
import { questions } from "./questions";
import { authedUser } from "./authedUser";
import { combineReducers } from "redux";

export default combineReducers({
    users,
    questions,
    //authedUser,
})