import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../common/colors';

import { Container, Text } from './styles';

const Button = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size='small' color={colors.title} />
      ) : (
        <Text>{children}</Text>
      )
      }
    </Container>
  )
}

export default Button;