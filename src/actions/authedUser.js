import { localStorage } from '../helpers'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const GET_AUTHED_USER = 'GET_AUTHED_USER'
export const LOCAL_STORAGE_KEY = 'authedUser'

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
