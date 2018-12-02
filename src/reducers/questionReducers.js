import {
  GET_QUESTIONS,
  ADD_QUESTION
} from '../actions/types'

function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
      case ADD_QUESTION:
        return {
          ...state,
          [action.question.id]: action.question
        }
    default:
      return state
  }
}

export default questions;