import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from "../../common/colors";
import { Alert } from 'react-native'

const HeaderRight = () => {
  return (
    <MaterialCommunityIcons
      name='login'
      size={32}
      color={colors.white}
      style={{ marginRight: 32 }}
      onPress={() =>
        Alert.alert(
          "Aviso",
          "Tem certeza que deseja sair ?",
          [
            {
              text: "Não",
              style: "cancel"
            },
            { text: "Sim", onPress: () => console.log("OK Pressed") }
          ], {
          cancelable: false
        }
        )
      }
    />
  )
}

export default HeaderRight;