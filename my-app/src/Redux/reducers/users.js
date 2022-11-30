import { RECEIVE_USERS } from "../actions/users";

export function users(state={},action){
    console.log(action.type)

    switch(action.type){
        case RECEIVE_USERS:
            return{
            ...state,
            ...action.users,
            }
            
        default:
            return state;
    }

}