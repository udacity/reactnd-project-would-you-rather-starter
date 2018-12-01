import {getInitialData as _getInitialData } from "../utils/api"
import {getUsers} from "./user";
import {getQuestions} from "./questions";

export function getInitialData() {
    return (dispatch) => {
        return _getInitialData().then(({users, questions}) => {
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
        })
    }

}