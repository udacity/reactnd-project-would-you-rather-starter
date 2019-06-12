
export default function(previousState = {}, action) {
  switch(action.type) {
    case 'RECEIVE_USERS':
      return {
        ...previousState,
        users: action.users
      };
    default:
      return previousState;
  }
};

