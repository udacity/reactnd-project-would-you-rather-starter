import { Loading, Fetch, SetSelected, Vote } from "./constants";

// Settings
const initialState = {
  data: {},
  loading: false,
  selected: null,
};
// ./Settings

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case Loading: {
      return {
        ...state,
        loading: action.payload,
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
          [userId]: {
            ...state.data[userId],
            answers: {
              ...state.data[userId].answers,
              [questionId]: answer,
            },
          },
        },
      };
    }
    default: {
      return state;
    }
  }
}
