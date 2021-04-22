import { AUTHORIZE_USER, LOGOUT_USER } from '../constants';
export const signInAction =(user)=> ({type: AUTHORIZE_USER, user});
export const logoutAction = () => ({ type:LOGOUT_USER});
  