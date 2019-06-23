export default function(previousState = {}, action) {
  switch(action.type) {
    case 'LOGIN_USER' :
      return action.user;
    case 'LOGOUT_USER':
      return {};
    default:
      return previousState;
  }
}
