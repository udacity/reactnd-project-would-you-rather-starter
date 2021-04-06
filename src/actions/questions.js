import { FETCH_QUESTIONS } from "../constants/index";

export const fetchQuestions= (questions) => (dispatch) =>{
  dispatch({ type:FETCH_QUESTIONS, questions });
}