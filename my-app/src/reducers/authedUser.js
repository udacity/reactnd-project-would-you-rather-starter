//this import for action type only and it is not necessary
import { SET_AUTHED_USER } from "../actions/authedUser";

export function authedUser(state ={}, action){
    switch(action.type){
        case SET_AUTHED_USER:
            return{
                ...state,
                ...action.id
            }
        default:
            state;
    }
}