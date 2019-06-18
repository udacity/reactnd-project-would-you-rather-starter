import { LOG_IN, LOG_OUT } from "../actions/logState";

export default function logState(state = null, action) {
  switch (action.type) {
    case LOG_IN:
      return state = true
    case LOG_OUT:
      return state = false
    default:
      return state
  }
}