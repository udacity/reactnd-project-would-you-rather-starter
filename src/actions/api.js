import {  _getUsers } from '../api/_DATA'
import { receiveUsers } from './users'

export function getUsers() {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
    }
}
