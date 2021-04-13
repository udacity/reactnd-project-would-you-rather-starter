import * as constant from '../constants';
export const questions =(state={}, action) =>{
    let { users } = action;
    switch(action.type){
        case constant.FETCH_QUESTIONS:
            return {...state, ...action.questions};
        case constant.SAVE_QUESTION:           
           const { id, author, timestamp,optionOne,optionTwo, questions} = action;
           
        return {
            ...questions,
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