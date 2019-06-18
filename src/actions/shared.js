import { receiveQuestions, updateOption, newQuestion } from "./questions"
import { receiveUsers, answerQuestion, createQuestion } from "./users"
import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api"
import { setAuthedUser, removeAuthedUser } from "./authedUser";
import { logIn, logOut } from "./logState";

// const AUTHED_ID = 'tylermcginnis' // For Test

export function handleInitialData(cb) {
  return dispatch => {
    return getInitialData()
      .then(({ questions, users}) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        // dispatch(setAuthedUser(AUTHED_ID)) // For test
        // dispatch(logIn()) // For test
        cb()
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

export function handleSaveQuestion(question, cb) {
  return dispatch => {
    return saveQuestion(question)
      .then(formattedQuestion => {
        dispatch(newQuestion(formattedQuestion))
        dispatch(createQuestion(formattedQuestion))
        cb()
      })
  }
}

export function handleUserLogin(uid) {
  return dispatch => {
    dispatch(setAuthedUser(uid))
    dispatch(logIn())
  }
}

export function handleUserLogout() {
  return dispatch => {
    dispatch(removeAuthedUser())
    dispatch(logOut())
  }
}