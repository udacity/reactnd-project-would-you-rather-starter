import {
  GET_QUESTIONS
} from "./types";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}