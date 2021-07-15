import auth from '@react-native-firebase/auth';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

 const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user
});

export const USER_LOGOUT = 'USER_LOGOUT'
const userLogout = () => ({
  type: USER_LOGOUT,
});

export const handleLogin = ({email,password}) => dispatch => {
      auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        const action = userLoginSuccess(user)
        dispatch(action);
      })
  }