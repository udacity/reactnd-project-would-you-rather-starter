
export default function(previousState = {}, action) {
  switch(action.type) {
    case 'RECEIVE_USERS':
      return {
        ...previousState,
        ...action.users
      };
    case 'SUBMIT_POLL_ANSWER':
      return {
        ...previousState,
        [action.userId]: {
          ...previousState[action.userId],
          answers: {
            ...previousState.answers,
            [action.questionId]: action.answer
          }
        }
      };
    default:
      return previousState;
  }
};

