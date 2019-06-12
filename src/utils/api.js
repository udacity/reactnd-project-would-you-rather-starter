import { _getUsers } from './_DATA';

export function getInitialData() {
  return _getUsers().then((users) => ({
    users
  }));
};
