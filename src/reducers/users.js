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
      console.log("from users reducer");
      return {
        ...state,
        users: {
          ...state.users,
          [action.authedUser]: {
            ...state.users[action.authedUser],
            answers: {
              ...state.users[action.authedUser].answers,
              [action.qid]: action.answer,
            },
          },
        },
      };

    default:
      return state;
  }
}
