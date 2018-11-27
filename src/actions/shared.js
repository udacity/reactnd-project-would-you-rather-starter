import {getInitialData} from "../utils/api"
import {getUsers} from "./userActions";
import {getQuestions} from "./questionActions";


export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(getQuestions(questions))
            dispatch(getUsers(users))
        })
    }

}