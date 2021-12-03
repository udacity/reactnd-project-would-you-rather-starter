import { loadingAction, fetchAction, setSelectedAction } from "./actionCreators";

// API
import { _getUsers } from "../../_DATA";

// ./API

export function fetchUsers() {
  return (dispatch) => {
    dispatch(loadingAction(true));

    _getUsers()
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        dispatch(loadingAction(false));
        dispatch(fetchAction(res));

        return res;
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };
}

export function setSelectedUser(id) {
  return (dispatch) =>
    _getUsers()
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        const user = res[Object.keys(res).filter((el) => el === id)];
        localStorage.setItem("udacity-would-you-rather--current-user", JSON.stringify(user));

        dispatch(setSelectedAction(user));

        return res;
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
}

export function deleteSelectedUser() {
  return (dispatch) => {
    localStorage.removeItem("udacity-would-you-rather--current-user");
    dispatch(setSelectedAction(null));
  };
}
