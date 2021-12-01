import { Loading, Fetch, SetSelected, Vote } from "./constants";

export const loadingAction = (load) => ({
  type: Loading,
  payload: load,
});
export const fetchAction = (users) => ({
  type: Fetch,
  payload: users,
});
export const setSelectedAction = (user) => ({
  type: SetSelected,
  payload: user,
});
export const voteAction = (payload) => ({
  type: Vote,
  payload,
});
