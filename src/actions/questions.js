import {
  GET_QUESTIONS,
  ADD_QUESTION
} from "./types";
import {
  saveQuestion
} from '../utils/api';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const authorID = getState().auth.user.id;
    return saveQuestion({
        author: authorID,
        optionOneText,
        optionTwoText,
      })
      .then((question) => dispatch(addQuestion(question)));
  };
}