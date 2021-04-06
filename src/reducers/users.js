//TODO:SAVE USER, SAVE USER ANSWER, SAVE USER QUESTION,GET ALL USERS;
import * as constant from '../constants/index';
export const users =(state= {}, action) =>{
    switch(action.type){
        case constant.FETCH_USERS:        
            return {...state, ...action.users};
        default:
            return state;
    }
}