import {getInitialData} from "../utils/api"
import {getUsers} from "./user";
import {getQuestions} from "./questions";

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(getQuestions(questions))
            dispatch(getUsers(users))
        })
    }

}