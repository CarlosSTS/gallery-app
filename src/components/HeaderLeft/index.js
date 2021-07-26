import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native'

import { colors } from "../../common/colors";

const HeaderLeft = () => {
  const {goBack} = useNavigation()
  return (
    <FontAwesome
      name="chevron-left"
      size={32}
      color={colors.white}
      style={{ marginLeft: 16 }}
      onPress={() => goBack()}
    />
  )
}

export default HeaderLeft;