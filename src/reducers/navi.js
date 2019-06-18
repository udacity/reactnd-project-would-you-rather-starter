import { NAV_TAB, NAV_OTHER } from "../actions/navi";

export default function navi(state = false, action) {
  switch (action.type) {
    case NAV_TAB:
      return action.value !== 3 ? action.value : 0
    case NAV_OTHER:
      return false
    default:
      return state
  }
}