import { getInitialDataAPI, saveQuestionAPI, saveQuestionAnswerAPI } from '../utils/api'
import { receiveUsers, addUserQuestion, addUserAnswer } from '../actions/users'
import { addQuestion, receiveQuestions, saveQuestionAnswer } from '../actions/questions'


export function handleInitialData() {
  return (dispatch) => {
    return getInitialDataAPI()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestionAPI({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((formatedQuestion) => {
        dispatch(addQuestion(formatedQuestion))
        dispatch(addUserQuestion(authedUser, formatedQuestion.id))
      })
  }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch, getState) => {
    return saveQuestionAnswerAPI({
      authedUser,
      qid,
      answer
    })
      .then(() => {
        dispatch(saveQuestionAnswer(authedUser, qid, answer))
        dispatch(addUserAnswer(authedUser, qid, answer))
      })
  }
}