import { FETCH_USERS } from '../constants/index'
export const fetchUsers = (users) => (dispatch) =>{
  dispatch({ type:FETCH_USERS, users});
}