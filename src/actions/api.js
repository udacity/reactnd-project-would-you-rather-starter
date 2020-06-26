import {  _getUsers, _getQuestions, _saveQuestion } from '../api/_DATA'
import {
    receiveUsers,
    receiveQuestions,
    setQuestions,
    addAuthedUserQuestion,
    updateUserQuestions,
    setAvailableQuestions
} from '../actions'

export function getUsers() {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
    }
}

export function getQuestions() {
    return (dispatch) => {
        return _getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions))
            })
    }
}

export function addQuestion({ author, optionOneText, optionTwoText }) {
    return (dispatch, store) => {
        return _saveQuestion({ author, optionOneText, optionTwoText })
            .then((formattedQuestion) => {
                dispatch(setQuestions(formattedQuestion))
                dispatch(addAuthedUserQuestion(store(), formattedQuestion))
                dispatch(updateUserQuestions(store(), formattedQuestion.id))
                dispatch(setAvailableQuestions(store()))
                return Promise.resolve()
            })
    }
}
