import * as actions from "../actions/users";

const initialState = {
  users: {},
  loading: false,
};
export default function users(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USERS:
      return { ...state, loading: true };

    case actions.GET_USERS_SUCCESS:
      return { users: action.users, loading: false };

    case actions.GET_USERS_FAILURE:
      return { ...state, loading: false };

    case "SAVE_QUESTIONS_ANSWER":
      console.log("from user reducer ");
      return state;

    default:
      return state;
  }
}
