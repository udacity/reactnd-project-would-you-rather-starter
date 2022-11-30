import { RECEIVE_QUESTIONS } from "../actions/questions";

export function questions(state={},action){
    console.log(action.type)
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
            ...state,
            ...action.questions,
            }
            
        default:
            return state;
    }

}