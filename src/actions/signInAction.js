import { AUTHORIZE_USER } from '../constants';
export const signInAction =(user)=> ({type: AUTHORIZE_USER, user});