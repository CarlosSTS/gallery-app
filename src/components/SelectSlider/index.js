import React from 'react';
import Slider from '@react-native-community/slider';

import { Container, Title, Info } from './styles';
import { colors } from '../../common/colors';

const SelectSlider = ({ value, onValueChange }) => {

  return (
    <>
      <Container>
        <Info>
          <Title>Nota</Title>
          <Title>{value}</Title>
        </Info>
        
        <Slider
          step={1}
          value={value}
          onValueChange={onValueChange}
          style={{ width: '100%', marginBottom: 12 }}
          minimumValue={0}
          thumbTintColor={colors.blue}
          maximumValue={100}
          minimumTrackTintColor={colors.green}
          maximumTrackTintColor={colors.red}
        />
      </Container>
    </>
  )

}

export default SelectSlider;