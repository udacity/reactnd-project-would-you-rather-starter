import { FETCH_USERS, SAVE_QUESTION_ANSWER } from '../constants/index'
import * as api from "../utils/api";
export const fetchUsers = (users) => (dispatch) =>{
  dispatch({ type:FETCH_USERS, users});
}
export const saveQuestionAnswer =(qid, answer) =>(dispatch, getState) =>{
  const { signUser:authedUser, users } = getState();
 
  api.saveQuestionAnswer({authedUser, qid, answer}).then(()=>{   
   dispatch({ type:SAVE_QUESTION_ANSWER,authedUser, qid, answer, users });
  }).catch(err=> alert(err));
  
 }

