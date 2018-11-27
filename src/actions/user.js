import { GET_USERS } from "./types";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
