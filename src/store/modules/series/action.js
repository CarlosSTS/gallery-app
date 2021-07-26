import { Alert } from "react-native";
import database from "@react-native-firebase/database";
import auth from '@react-native-firebase/auth';

//.once so executa uma vez
//.on sempre que for chamado
export const SET_SERIES = 'SET_SERIES'
const setSeries = series => ({
  type: SET_SERIES,
  series
})

export const watchSeries = () => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/series`)
      .on('value', snapshot => {
        const series = snapshot.val()
        const action = setSeries(series)
        dispatch(action)
      })
  }
}

export const deleteSerie = serie => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Deletar',
        `Deseja deletar ${serie.title}`,
        [{
          text: 'Não',
          onPress: () => {
            resolve(false)
          },
          style: 'cancel',
        }, {
          text: 'Sim',
          onPress: async () => {
            try {
              const { currentUser } = auth();
              await database()
                .ref(`/users/${currentUser.uid}/series/${serie.id}`)
                .remove()

              resolve(true)
            } catch (error) {
              Alert.alert(`Aviso','Não conseguimos deletar: ${serie.title}`)
              reject(error)
            }
          },
        }],
        { cancelable: false })
    })
  }
}