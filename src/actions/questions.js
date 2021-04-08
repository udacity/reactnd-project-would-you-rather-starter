import { FETCH_QUESTIONS, SAVE_QUESTION } from "../constants/index";
import * as api from "../utils/api";

export const fetchQuestions= (questions) => (dispatch) =>{
  dispatch({ type:FETCH_QUESTIONS, questions });
}
export const saveQuestion= (question) => (dispatch, getState) =>{
  const { signUser:author, users } = getState();
  const {optionOneText, optionTwoText} = question;
  console.log(`Option one: ${optionOneText} Option one:${optionTwoText} Author${author} from actions`);
  api.saveQuestion({optionOneText, optionTwoText,author}).then(question=>{
    //console.loge tquestion id
    
    dispatch({ type:SAVE_QUESTION, question, author,users });
  });

}