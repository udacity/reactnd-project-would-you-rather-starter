import * as actions from "../actions/authedUser";

const initialState = {
  authedUser: {},
};

export default function authedUser(state = initialState, action) {
  switch (action.type) {
    case actions.SIGN_IN_USER:
      return Object.assign({}, action.authedUser);

    case actions.SIGN_OUT_USER:
      return null;

    default:
      return state;
  }
}
