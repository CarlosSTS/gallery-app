import React,{ forwardRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container,TInput } from './styles';

import {colors} from '../../common/colors'

const Input = ({style,icon, ...rest}, ref) => {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color={colors.initial} />}
      <TInput {...rest} ref={ref}/>
    </Container>
  )
}

export default forwardRef(Input);