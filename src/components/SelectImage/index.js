import React from 'react';
import { Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import imagePickerOptions from '../../constants/imagePickerOptions'

import { Container, Icon, Image } from './styles';

const SelectImage = ({value, onValueChange }) => {

  function imagepickerCallback(data) {
    if (data.didCancel) {
      return Alert.alert('Aviso', 'Seleção de imagem cancelada')
    }
    if (data.error) {
      return Alert.alert('Aviso', 'Erro ao enviar imagem')
    }
    if (!data.assets[0].uri) {
      return Alert.alert('Aviso', 'Imagem não encontrada')
    }
    onValueChange(data.assets[0].uri);
  }

  return (
    <Container onPress={() => launchImageLibrary(imagePickerOptions, imagepickerCallback)}>
      {value ? <Image source={{ uri: value }} /> : <Icon />}
    </Container>
  )
}

export default SelectImage;