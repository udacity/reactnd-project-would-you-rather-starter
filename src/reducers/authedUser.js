import { SET_AUTHED_USER, GET_AUTHED_USER, REMOVE_AUTHED_USER } from '../actions'

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id
        case GET_AUTHED_USER:
            return action.id
        case REMOVE_AUTHED_USER:
            return action.id
        default:
            return state
    }
}
