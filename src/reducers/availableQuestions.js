import { SET_AVAILABLE_QUESTIONS, UPDATE_AVAILABLE_QUESTIONS } from '../actions'

export default function availableQuestions(state = null, action) {
    switch(action.type) {
        case (SET_AVAILABLE_QUESTIONS || UPDATE_AVAILABLE_QUESTIONS):
            return action.availableQuestions
        default:
            return state
    }
}
