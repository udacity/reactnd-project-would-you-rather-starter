import { RECEIVE_QUESTIONS, SET_QUESTIONS } from '../actions'

export  default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SET_QUESTIONS:
            const question = {
                [action.question.id]: {
                    ...action.question
                },
            }
            return {
                ...state,
                ...question
            }
        default :
        return state
    }
}
