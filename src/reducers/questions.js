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
        case constant.SAVE_QUESTION_ANSWER:
            const  {authedUser, qid,  answer} = action;
            
            return  {
                ...state,
                [qid]:{
                    ...state[qid],
                    [answer]: {
                    ...state[qid][answer],
                    votes: state[qid][answer].votes.concat([authedUser])
                    
                    }
                }
            }; 
       
        default:
            return state;
    }
}