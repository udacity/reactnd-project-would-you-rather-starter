import {AUTHORIZE_USER, LOGOUT_USER} from '../constants';
export function signUser(state = {}, action){
    switch(action.type){
        case AUTHORIZE_USER: 
            return action.user;
        case LOGOUT_USER:
            return {signUser:''};
        default:
            return state;
    }
}