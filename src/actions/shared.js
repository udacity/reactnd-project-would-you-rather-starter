import { receiveQuestions, updateOption, newQuestion } from "./questions"
import { receiveUsers, answerQuestion, createQuestion } from "./users"
import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api"
import { setAuthedUser, removeAuthedUser } from "./authedUser"
import { logIn, logOut } from "./logState"
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData(cb) {
  return dispatch => {
    dispatch(showLoading())

    return getInitialData()
      .then(({ questions, users}) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        cb()
        dispatch(hideLoading())
      })
  }
}

export function handleSaveQuestionAnswer(info) {
  return dispatch => {
    dispatch(showLoading())

    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(updateOption(info))
        dispatch(answerQuestion(info))
        dispatch(hideLoading())
      })
  }
}

export function handleSaveQuestion(question, cb) {
  return dispatch => {
    dispatch(showLoading())

    return saveQuestion(question)
      .then(formattedQuestion => {
        dispatch(newQuestion(formattedQuestion))
        dispatch(createQuestion(formattedQuestion))
        cb()
        dispatch(hideLoading())
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