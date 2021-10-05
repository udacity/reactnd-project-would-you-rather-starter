import * as actions from "../actions/questions";

const initialState = {
  questions: {},
  loading: false,
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case actions.GET_QUESTIONS:
      return { ...state, loading: true };
    case actions.GET_QUESTIONS_SUCCESS:
      return { questions: action.questions, loading: false };
    case actions.GET_QUESTIONS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
