import { getInitialData } from '../utils/api';

export function receiveUsers(users) {
  return {
    type: 'RECEIVE_USERS',
    users
  };
}

export function loginUser(userId) {
  return {
    type: 'LOGIN_USER',
    userId
  }
}

export function logoutUser(userId) {
  return {
    type: 'LOGOUT_USER',
    userId
  }
}

export function loadInitialData() {
  return (dispatch) => {
    getInitialData()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
      });
  }
}
