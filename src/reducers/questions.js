import * as constant from '../constants';
export const questions =(state={}, action) =>{
    switch(action.type){
        case constant.FETCH_QUESTIONS:
            return {...state, ...action.questions};
        case constant.SAVE_QUESTION:
            // TODO:add question id to autho questions
           // return {...state, ...action.question}
           const {author, users, question} = action;
          const {id}= question;
          
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