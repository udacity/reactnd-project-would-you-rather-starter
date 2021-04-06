import { AUTHORIZE_USER } from '../constants';
export const signInAction =(userId)=> ({type: AUTHORIZE_USER, userId})