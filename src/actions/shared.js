import { receiveQuestions, updateOption, newQuestion } from "./questions";
import { receiveUsers, answerQuestion, createQuestion } from "./users";
import { setAuthedUser, removeAuthedUser } from "./authedUser";
import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import { logOut } from "./logState";

const AUTHED_ID = 'tylermcginnis'
// const AUTHED_ID = null

export function handleInitialData() {
  return dispatch => {
    return getInitialData()
      .then(({ questions, users}) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        // dispatch(setAuthedUser(AUTHED_ID))
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

// export function handleUserLogout(dispatch) {
  
//     dispatch(removeAuthedUser())
//     dispatch(logOut())
  
// } 