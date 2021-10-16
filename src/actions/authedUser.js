export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

export function signInUser(authedUser) {
  return {
    type: SIGN_IN_USER,
    authedUser,
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}

export function authUser(id) {
  return (dispatch) => {
    dispatch(signInUser(id));
  };
}
export function logOut() {
  return (dispatch) => {
    dispatch(signOutUser());
  };
}
