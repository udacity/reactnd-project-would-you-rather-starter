import * as constant from '../constants';
export const questions =(state={}, action) =>{
    switch(action.type){
        case constant.FETCH_QUESTIONS:
            return {...state, ...action.questions};
        case constant.SAVE_QUESTION:           
           const {author, users, question} = action;
         
        return  {
            ...users,
            [author]:{
                ...users[author],
                questions: users[author].questions.concat(question.id)
            }
        }
       
        default:
            return state;
    }
}