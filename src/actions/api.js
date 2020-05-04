import {  _getUsers } from '../api/_DATA'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'

const AUTHED_USER_ID = 'tylermcginnis'

export function getUsers() {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_USER_ID))
            })
    }
}
