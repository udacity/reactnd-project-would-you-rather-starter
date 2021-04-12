import { FETCH_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from "../constants/index";
import * as api from "../utils/api";

export const fetchQuestions= (questions) => (dispatch) =>{
  dispatch({ type:FETCH_QUESTIONS, questions });
}
export const saveQuestion= (question) => (dispatch, getState) =>{
  const { signUser:author, users } = getState();
  const {optionOneText, optionTwoText} = question; 
  
  api.saveQuestion({optionOneText, optionTwoText,author}).then((question)=>{   
    alert(`QUESTIONS: ${JSON.stringify(question)}`);
    //alert(`USERS: ${JSON.stringify(users)}`);
    dispatch({ type:SAVE_QUESTION, question, author,users });
  });
}
export const saveQuestionAnswer =(qid, answer) =>(dispatch, getState) =>{
 const { signUser:authedUser, users } = getState();

 
 api.saveQuestionAnswer({authedUser, qid, answer}).then(()=>{   
  dispatch({ type:SAVE_QUESTION_ANSWER,authedUser, qid, answer, users });
 }).catch(err=> alert(err));
 
}