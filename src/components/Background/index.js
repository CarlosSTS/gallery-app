import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {colors} from '../../common/colors';

 import styles from './styles';

const Background = ({children}) => {
const {initial, final} = colors
  return <LinearGradient 
    style={styles.container}
    colors={[initial, final]}
  >

    {children}
  </LinearGradient>
}

export default Background;