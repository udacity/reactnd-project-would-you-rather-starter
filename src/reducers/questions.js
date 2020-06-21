import { RECEIVE_QUESTIONS, SET_QUESTIONS } from '../actions'

export  default function questions(state = {}, action) {
    switch (action.type) {
        case (RECEIVE_QUESTIONS || SET_QUESTIONS):
            return {
                ...state,
                ...action.questions
            }
        default :
        return state
    }
}
