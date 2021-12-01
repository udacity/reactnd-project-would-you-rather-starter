import { Loading, Fetch, SetSelected, Vote, Add } from "./constants";

export const loadingAction = (load) => ({
  type: Loading,
  payload: load,
});
export const fetchAction = (questions) => ({
  type: Fetch,
  payload: questions,
});
export const setSelectedAction = (question) => ({
  type: SetSelected,
  payload: question,
});
export const voteAction = (payload) => ({
  type: Vote,
  payload,
});
export const addAction = (question) => ({
  type: Add,
  payload: question,
});
