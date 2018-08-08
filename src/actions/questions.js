export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}
