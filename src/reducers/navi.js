import { NAV_TAB, NAV_OTHER, RESET_NAV } from "../actions/navi";

export default function navi(state = false, action) {
  switch (action.type) {
    case NAV_TAB:
      return action.value
    case NAV_OTHER:
      return false
    case RESET_NAV:
      return 0
    default:
      return state
  }
}