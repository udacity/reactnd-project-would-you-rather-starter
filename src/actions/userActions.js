import {
    GET_USERS,
} from './types';

import { _getUsers } from '../data/_DATA';

export function getUsers(users) {
    return dispatch => {
        dispatch({
            type: GET_USERS,
            users: _getUsers.then(res => {
                return res;
            })
        })
    }
};