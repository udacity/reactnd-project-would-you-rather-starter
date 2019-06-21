export default function(previousState = {}, action) {
  switch(action.type) {
    case 'LOGIN_USER' :
      return action.userId;
    case 'LOGOUT_USER':
      return '';
    default:
      return '';
  }
}
