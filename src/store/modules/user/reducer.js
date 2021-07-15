import {USER_LOGIN_SUCCESS, USER_LOGOUT} from './actions';

export default function user(state = null, action) {
  switch (action.type) {
   
    case USER_LOGIN_SUCCESS:
      return action.user;

    case USER_LOGOUT:
      return null;
   
      default:
      return state;
  }
}