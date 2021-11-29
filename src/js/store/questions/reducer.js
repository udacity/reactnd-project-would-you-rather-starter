import { Loading, Fetch, Select, Add } from "./constants";

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
    case Select: {
      return {
        ...state,
        selected: action.payload,
      };
    }
    case Add: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
