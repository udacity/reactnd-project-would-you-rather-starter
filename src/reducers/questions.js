import * as constant from '../constants';
export const questions =(state={}, action) =>{
   
    switch(action.type){
        case constant.FETCH_QUESTIONS:
            return {...state, ...action.questions};
        case constant.SAVE_QUESTION:           
           const { id, author, timestamp,optionOne,optionTwo} = action;
           
        return {
            ...state,
            [id]: {
                id,
                author, 
                timestamp,
                optionOne,
                optionTwo,
            }
        }   
       
        default:
            return state;
    }
}