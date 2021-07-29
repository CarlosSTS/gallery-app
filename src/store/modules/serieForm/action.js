import { Alert } from "react-native";
import database from "@react-native-firebase/database";
import auth from '@react-native-firebase/auth';

export const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
export const setWholeSerie = serie => ({
  type: SET_WHOLE_SERIE,
  serie
})

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value
  }
}
export const SERIE_SAVED_SUCCESS = 'SERIE_SAVED_SUCCESS'
const serieSavedSuccess = () => ({
  type: SERIE_SAVED_SUCCESS
})

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM
})

export const handleResetForm = ({ }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Limpar',
        `Deseja realmente limpar todos os dados ?`,
        [
          {
            text: "Não",
            style: "cancel",
            onPress: () => {
              resolve(false)
            },
          },
          {
            text: "Sim 🧹", onPress: () => {
              try {
              const action = resetForm()
              dispatch(action)
              resolve(true)
            }catch (error){
              Alert.alert('Aviso', 'Não conseguimos limpar o formulário 😢')
              reject(error)
             }
            }
          }
        ], {
        cancelable: false
      })
    })
  }
}

export const saveSerie = serie => {
  const { currentUser } = auth();
  return async dispatch => {
    if (serie.id) {
      await database()
        .ref(`/users/${currentUser.uid}/series/${serie.id}`)
        .set(serie)

    } else {
      await database()
        .ref(`/users/${currentUser.uid}/series`)
        .push(serie)
    }
    dispatch(serieSavedSuccess())
  }
}