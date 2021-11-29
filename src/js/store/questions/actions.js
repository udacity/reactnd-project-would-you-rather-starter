import { loadingAction, fetchAction, selectAction } from "./actionCreators";

// API
import { _getQuestions } from "../../_DATA";

// ./API

export function fetchQuestions() {
  return (dispatch) => {
    dispatch(loadingAction(true));

    _getQuestions()
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

export function setSelectedQuestion(id) {
  return (dispatch) => {
    _getQuestions()
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        const question = res[Object.keys(res).filter((el) => el === id)];

        dispatch(selectAction(question));

        return res;
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };
}
