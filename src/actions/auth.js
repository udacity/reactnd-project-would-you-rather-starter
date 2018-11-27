import { LOG_IN, LOG_OUT } from './types';

import { getUsers } from '../utils/api';

export function logIn(user) {
    return {
        type: LOG_IN,
        user,
    };
}

export function setAuthUser(id) {
    return (dispatch) => {
        return getUsers()
            .then((users) => {
                const authedUser = Object.keys(users).filter((user) => user === id);
                authedUser.length === 0 ? dispatch(logIn(null)) : dispatch(logIn(users[authedUser]));
            });
    }
}

export function logOut() {
    return {
        type: LOG_OUT,
    };
}