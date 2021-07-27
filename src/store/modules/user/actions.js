import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_CREATE_ACCOUNT = 'USER_CREATE_ACCOUNT';
export const USER_RESET_PASSWORD = 'USER_RESET_PASSWORD';
export const USER_LOGOUT = 'USER_LOGOUT';

const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user
});
const userCreateAccount = user => ({
  type: USER_CREATE_ACCOUNT,
  user
})

const userResetPassword = () => ({
  type: USER_RESET_PASSWORD
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

export const handleResetPassword = ({ email }) => dispatch => {
  return auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      const action = userResetPassword()
      dispatch(action);
    })
}
export const handleLogout = ({ }) => dispatch => {
  return new Promise((resolve, reject) => {
    Alert.alert(
      "Aviso",
      "Tem certeza que deseja sair ?",
      [
        {
          text: "Não 🙏🏻",
          style: "cancel",
          onPress: () => {
            resolve(false)
          },
        },
        {
          text: "Sim",
          onPress: async () => {
            try {
              await auth()
                .signOut()
                .then(() => {
                  const action = userLogout()
                  dispatch(action);
                  resolve(true)
                })
            } catch (error) {
              // console.torn.log('ERROR',error)
              reject(error)
            }
          }
        }
      ], {
      cancelable: false
    }
    )
  })
}