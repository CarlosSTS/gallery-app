import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { colors } from '../../common/colors';

const Background = ({ children }) => {
  const { initial, final } = colors;
  
  return <LinearGradient
    style={{flex: 1}}
    colors={[initial, final]}
  >
    {children}
  </LinearGradient>
}

export default Background;