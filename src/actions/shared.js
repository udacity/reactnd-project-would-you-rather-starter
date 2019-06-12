import { receiveQuestions, updateOption } from "./questions";
import { receiveUsers, answerQuestion } from "./users";
import { setAuthedUser } from "./authedUser";
import { getInitialData, saveQuestionAnswer } from "../utils/api";

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return dispatch => {
    return getInitialData()
      .then(({ questions, users}) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}

export function handleSaveQuestionAnswer(info) {
  return dispatch => {
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(updateOption(info))
        dispatch(answerQuestion(info))
      })
  }
}