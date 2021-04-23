import { FETCH_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from "../constants/index";
import * as api from "../utils/api";

export const fetchQuestions= (questions) => (dispatch) =>{
  dispatch({ type:FETCH_QUESTIONS, questions });
}
export const saveQuestion= (question) => (dispatch, getState) =>{
  const { signUser:author } = getState();
  const {optionOneText, optionTwoText} = question; 
  
  api.saveQuestion({optionOneText, optionTwoText,author}).then((question)=>{   
    
   const {id, optionOne, optionTwo, timestamp } = question;
    dispatch({ type:SAVE_QUESTION, author, id, optionOne, optionTwo, timestamp });
    
  });
}
export const saveQuestionAnswer =(qid, answer) =>async (dispatch, getState) =>{
  const { signUser:authedUser } = getState();
   
  await api.saveQuestionAnswer({authedUser, qid, answer}).then(()=>{   
   dispatch({ type:SAVE_QUESTION_ANSWER,authedUser, qid, answer });
  }).catch(err=> alert(err));
  
 }
