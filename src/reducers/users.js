//TODO:SAVE USER, SAVE USER ANSWER, SAVE USER QUESTION,GET ALL USERS;
import * as constant from '../constants/index';
export const users =(state= {}, action) =>{
   const {users } = action;
    switch(action.type){
        case constant.FETCH_USERS:        
            return {...state, ...action.users};

        case constant.SAVE_QUESTION_ANSWER:
            let {authedUser, qid,  answer} = action;
            console.log({...state})
            return  {
                ...state,
                [authedUser]:{
                    ...users[authedUser],
                    answers: {
                    ...users[authedUser].answers,
                    [qid]: answer
                    }
                }
            };
        default:
            return state;
    }
}