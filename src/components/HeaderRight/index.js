import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from "../../common/colors";

const HeaderRight = ({onPress}) => {
  return (
    <MaterialCommunityIcons
      name='login'
      size={32}
      color={colors.white}
      style={{ marginRight: 16 }}
      onPress={onPress}
    />
  )
}

export default HeaderRight;