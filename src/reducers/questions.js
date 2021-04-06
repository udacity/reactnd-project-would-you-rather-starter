import * as constant from '../constants';
export const questions =(state={}, action) =>{
    switch(action.type){
        case constant.FETCH_QUESTIONS:
            return {...state, ...action.questions};
        default:
            return state;
    }
}