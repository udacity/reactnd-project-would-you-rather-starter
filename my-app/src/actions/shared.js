import { getIntialData } from "../utils/api"
import { receiveUsers } from "./users"
import { receiveQuestions } from "./questions"
import { setAuthedUser } from "./authedUser"


const AUTHED_ID = 'kareem'
export function handleInitialData(){
    return (dispatch)=>{
        return getIntialData().then(([users, questions])=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
        }) 
    }
}