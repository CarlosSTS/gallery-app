import React,{forwardRef} from 'react'
import { Picker } from '@react-native-picker/picker';

import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';

import { Container } from './styles'

const SelectPicker = ({ value, onValueChange,onBlur },ref,onFocus) => {

  return (
    <Container>
      
      <Picker
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
        style={{ color: colors.white }}
        dropdownIconColor={colors.white}
        mode='dialog'
        prompt='Escolha um gênero'
        numberOfLines={1}
        selectedValue={value}
        onValueChange={itemValue => onValueChange(itemValue)}>
        <Picker.Item label="Ação" value="Ação" color={colors.black} fontFamily={fonts.title} />
        <Picker.Item label="Policial" value="Policial" color={colors.black} fontFamily={fonts.title} />
        <Picker.Item label="Comédia" value="Comédia" color={colors.black} fontFamily={fonts.title} />
        <Picker.Item label="Terror" value="Terror" color={colors.black} fontFamily={fonts.title} />
      </Picker>
    </Container>
  )
}

export default forwardRef(SelectPicker);