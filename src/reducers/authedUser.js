import * as actions from "../actions/authedUser";

const initialState = {
  authedUser: null,
};

export default function authedUser(state = initialState, action) {
  switch (action.type) {
    case actions.SIGN_IN_USER:
      return { ...state, authedUser: action.authedUser };

    case actions.SIGN_OUT_USER:
      return { ...state, authedUser: null };

    default:
      return state;
  }
}
