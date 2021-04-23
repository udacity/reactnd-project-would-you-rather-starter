//TODO:SAVE USER, SAVE USER ANSWER, SAVE USER QUESTION,GET ALL USERS;
import * as constant from '../constants/index';
export const users =(state= {}, action) =>{
  
    switch(action.type){
        case constant.FETCH_USERS:        
            return {...state, ...action.users};
        case constant.SAVE_QUESTION: 
            return { 
              ...state, 
              [action.author]: {
                  ...state[action.author], 
                  questions:state[action.author].questions.concat(action.id)
              }
            }
            
        case constant.SAVE_QUESTION_ANSWER: 
          return {
              ...state, 
            [action.authedUser]: {
                ...state[action.authedUser],
                answers:{
                    ...state[action.authedUser].answers,
                    [action.qid]: action.answer
                }
            }
        }
        
        default:
            return state;
    }
}