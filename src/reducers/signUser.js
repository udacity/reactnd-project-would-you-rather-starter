import {AUTHORIZE_USER} from '../constants';
export function signUser(state = {}, action){
    switch(action.type){
        case AUTHORIZE_USER:          
            return action.userId;
        default:
            return state;
    }
}