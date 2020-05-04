import { combineReducers } from 'redux'
import users from './users'
import authedUser from './authedUser'

export default combineReducers({
    users,
    authedUser,
})
