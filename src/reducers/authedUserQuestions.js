import { SET_AUTHED_USER_QUESTIONS } from '../actions/authedUserQuestions'

export default function authedUserQuestions(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER_QUESTIONS:
            return action.authedUserQuestions
        default:
            return state
    }
}
