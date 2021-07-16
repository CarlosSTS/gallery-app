import auth from '@react-native-firebase/auth';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_CREATE_ACCOUNT = 'USER_CREATE_ACCOUNT';
export const USER_LOGOUT = 'USER_LOGOUT'

const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user
});
const userCreateAccount = user => ({
  type: USER_CREATE_ACCOUNT,
  user
})

const userLogout = () => ({
  type: USER_LOGOUT,
});

export const handleLogin = ({ email, password }) => dispatch => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      const action = userLoginSuccess(user)
      dispatch(action);
    })
}

export const handleCreateAccount = ({ email, password }) => dispatch => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      const action = userCreateAccount(user)
      dispatch(action);
    })
}