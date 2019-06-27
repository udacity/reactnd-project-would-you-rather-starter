
export default function(previousState = {}, action) {
  switch(action.type) {
    case 'RECEIVE_QUESTIONS':
      return action.questions;
    case 'SUBMIT_POLL_ANSWER':
      return {
        ...previousState,
        [action.questionId]: {
          ...previousState[action.questionId],
          [action.answer]: {
            ...previousState[action.questionId][action.answer],
            votes: Array.concat(previousState[action.questionId][action.answer].votes, action.userId)
          }
        }
      };
    default:
      return previousState;
  }
};
