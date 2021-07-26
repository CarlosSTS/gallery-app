import React from 'react';
import { ActivityIndicator } from 'react-native';
import Background from '../Background';
import { colors } from '../../common/colors';

import styles from './styles';

const Loading = () => {
  return (
    <Background>
      <ActivityIndicator
        style={styles.loading}
        size='large'
        color={colors.white}
      />
    </Background>
  )
}

export default Loading;