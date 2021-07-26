import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../common/colors';

import {Container,Label,Content} from './styles';

function Line({ label = '',color= '',icon, content = "-",onPress }) {

  return (
    <Container>
      <Label>{label}:</Label>
      <Content color={color} content={content}>{content}</Content>
      {icon && <Icon name={icon} size={20} style={{paddingHorizontal: 8}} onPress={onPress} color={colors.white} />}
    </Container>
  );
}

export default Line;