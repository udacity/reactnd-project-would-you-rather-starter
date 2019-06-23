
export default function(previousState = {}, action) {
  switch(action.type) {
    case 'RECEIVE_QUESTIONS':
      return action.questions;
    default:
      return previousState;
  }
};
