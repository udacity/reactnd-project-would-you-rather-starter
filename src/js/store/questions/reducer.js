import { Loading, Fetch, SetSelected, Vote, Add } from "./constants";

// Settings
const initialState = {
  data: [],
  loading: false,
  selected: null,
};

// ./Settings

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case Loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case Fetch: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case SetSelected: {
      return {
        ...state,
        selected: action.payload,
      };
    }
    case Vote: {
      const { userId, questionId, answer } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          [questionId]: {
            ...state.data[questionId],
            [answer]: {
              ...state.data[questionId][answer],
              votes: state.data[questionId][answer].votes.concat([userId]),
            },
          },
        },
      };
    }
    case Add: {
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
}
