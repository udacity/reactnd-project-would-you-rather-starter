import { _getUsers } from "../_DATA";

export const GET_USERS = "GET_USERS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
// export const SAVE_QUESTIONS_ANSWER = "SAVE_QUESTIONS_ANSWER";

export const getUsers = () => {
  return {
    type: GET_USERS,
  };
};
export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    users,
  };
};
export const getUsersFailure = () => {
  return {
    type: GET_USERS_FAILURE,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(getUsers());
    try {
      const response = await _getUsers();
      const data = response;
      dispatch(getUsersSuccess(data));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };
};
