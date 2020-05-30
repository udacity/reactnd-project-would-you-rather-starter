import { combineReducers } from 'redux'
import users from './users'
import authedUser from './authedUser'
import questions from './questions'
import authedUserQuestions from  './authedUserQuestions'

export default combineReducers({
    users,
    authedUser,
    questions,
    authedUserQuestions,
})
