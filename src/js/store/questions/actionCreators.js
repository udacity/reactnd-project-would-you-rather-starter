import { Loading, Fetch, Select, Add } from "./constants";

export const loadingAction = (load) => ({
  type: Loading,
  payload: load,
});
export const fetchAction = (questions) => ({
  type: Fetch,
  payload: questions,
});
export const selectAction = (question) => ({
  type: Select,
  payload: question,
});
export const addAction = (question) => ({
  type: Add,
  payload: question,
});
