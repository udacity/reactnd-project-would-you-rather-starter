import {  _getUsers, _getQuestions, _saveQuestion } from '../api/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions, setQuestions } from './questions'

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
    return (dispatch) => {
        return _saveQuestion({ author, optionOneText, optionTwoText })
            .then((formattedQuestion) => {
                dispatch(setQuestions(formattedQuestion))
            })
    }
}
