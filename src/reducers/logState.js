import { LOG_IN, LOG_OUT, APP_INIT } from "../actions/logState";

export default function logState(state = null, action) {
  switch (action.type) {
    case LOG_IN:
      return state = true
    case LOG_OUT:
      return state = false
    case APP_INIT:
      return state = 0
    default:
      return state
  }
}