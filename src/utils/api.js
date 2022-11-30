import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './_DATA';
export const initialData = () =>{
    return Promise.all([
        _getUsers(), _getQuestions()
    ]).then(([users, questions]) =>({
        users, questions
    }))
}

export const saveQuestion=(info)=>_saveQuestion(info); //question

export const saveQuestionAnswer=(info)=>_saveQuestionAnswer(info); // { authedUser, qid, answer }

export const isQuestionAnswered =(optionOne, optionTwo, signUser)=>optionOne.votes.concat(optionTwo.votes).includes(signUser) // {}