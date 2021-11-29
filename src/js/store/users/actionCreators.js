import { Loading, Fetch, Select, Add } from "./constants";

export const loadingAction = (load) => ({
  type: Loading,
  payload: load,
});
export const fetchAction = (users) => ({
  type: Fetch,
  payload: users,
});
export const selectAction = (user) => ({
  type: Select,
  payload: user,
});
export const addAction = (user) => ({
  type: Add,
  payload: user,
});
