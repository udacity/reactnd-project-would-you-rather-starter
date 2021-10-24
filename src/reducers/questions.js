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
    case actions.SAVE_QUESTIONS_ANSWER:
      const question = state.questions[action.qid];
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.qid]: {
            ...question,
            [action.answer]: {
              ...question[action.answer],
              votes: question[action.answer].votes.concat(action.authedUser),
            },
          },
        },
      };
    case actions.SAVE_QUESTION:
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.question.id]: action.question,
        },
      };

    default:
      return state;
  }
}
