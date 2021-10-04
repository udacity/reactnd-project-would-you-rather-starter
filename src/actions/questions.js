import { _getQuestions } from "../_DATA";
import { GET_USERS_FAILURE } from "./users";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTIONS_FAILURE = "GET_QUESTIONS_FAILURE";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";

export const getQuestions = () => {
  return { type: GET_QUESTIONS };
};

export const getQuestionsSuccess = (questions) => {
  return { type: GET_QUESTIONS_SUCCESS, questions };
};

export const getQuestionsFailure = () => {
  return { type: GET_USERS_FAILURE };
};

export function fetchQuestions() {
  return async (dispatch) => {
    dispatch(getQuestions);

    try {
      const response = await _getQuestions();
      const data = await response;
      dispatch(getQuestionsSuccess(data));
    } catch (error) {
      dispatch(getQuestionsFailure());
    }
  };
}
