import {
  GET_QUESTIONS,
  ANSWER_QUESTION,
  ADD_QUESTION
} from '../actions/types'

function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
      // case ANSWER_QUESTION:
      //   return {
      //     ...state,
      //     [action.qid]: {
      //       ...state[action.qid],
      //       [action.option]: {
      //         ...state[action.qid][action.option],
      //         votes: state[action.qid][action.option].votes.concat([action.auth])
      //       }
      //     }
      //   }
      // case ADD_QUESTION:
      //   return {
      //     ...state,
      //     [action.question.id]: action.question
      //   }
    default:
      return state
  }
}

export default questions;