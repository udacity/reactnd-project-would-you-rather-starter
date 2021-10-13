import { _getQuestions, _saveQuestionAnswer } from "../_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTIONS_FAILURE = "GET_QUESTIONS_FAILURE";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const SAVE_QUESTIONS_ANSWER = "SAVE_QUESTIONS_ANSWER";
export const SAVE_QUESTIONS_ANSWER_FAILURE = "SAVE_QUESTIONS_ANSWER_FAILURE";

export const getQuestions = () => {
  return { type: GET_QUESTIONS };
};

export const getQuestionsSuccess = (questions) => {
  return { type: GET_QUESTIONS_SUCCESS, questions };
};

export const getQuestionsFailure = () => {
  return { type: GET_QUESTIONS_FAILURE };
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

export const saveQuestionAnswer = ({ authedUser, qid, answer }) => {
  return { type: SAVE_QUESTIONS_ANSWER, authedUser, qid, answer };
};
export const saveQuestionAnswerFailure = () => {
  return { type: SAVE_QUESTIONS_ANSWER_FAILURE };
};

export function saveAnswer({ authedUser, qid, answer }) {
  return async (dispatch) => {
    try {
      await _saveQuestionAnswer({ authedUser, qid, answer });

      dispatch(saveQuestionAnswer({ authedUser, qid, answer }));
    } catch (error) {}
  };
}
