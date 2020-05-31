import { localStorage } from '../helpers'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const GET_AUTHED_USER = 'GET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'
export const LOCAL_STORAGE_KEY = 'authedUser'

export function removeAuthedUser() {
    return (dispatch) => {
        localStorage.remove(LOCAL_STORAGE_KEY)
        dispatch(setAuthedUser(null))
    }
}

export function setAuthedUser(id) {
    localStorage.set(LOCAL_STORAGE_KEY, id)
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

export function getAuthedUser() {
    const authedUserId = localStorage.get(LOCAL_STORAGE_KEY) === 'null' ? null : localStorage.get(LOCAL_STORAGE_KEY)
    return {
        type: GET_AUTHED_USER,
        id: authedUserId
    }
}
