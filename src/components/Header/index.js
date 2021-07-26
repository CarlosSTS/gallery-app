import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';

import imagePickerOptions from '../../constants/imagePickerOptions'

import Logo from '../../assets/logo.png'
import {
  Container,
  ImagePhoto,
  UserName,
  Greetings,
  AddPhoto
} from './styles';

function Header() {
  const [userName, setUserName] = useState('');
  const [userPhoto, setUserPhoto] = useState('');

 async function imagepickerCallback(data) {
    if (data.didCancel) {
      return Alert.alert('Aviso', 'Seleção de imagem cancelada')
    }
    if (data.error) {
      return Alert.alert('Aviso', 'Erro ao enviar imagem')
    }
    if (!data.assets[0].uri) {
      return Alert.alert('Aviso', 'Imagem não encontrada')
    }
    const {uri: image}= data.assets[0]
   
   await AsyncStorage.setItem('@gallery:image', image)
   setUserPhoto(image);
  }

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@gallery:user');
      const image = await AsyncStorage.getItem('@gallery:image');

      setUserName(user || '');
      setUserPhoto(image || '')
    }

    loadStorageUserName()
  }, [userName,userPhoto])

  return (
    <>
      <Container>
        <View>
          <Greetings>Olá,</Greetings>
          <UserName>{userName}</UserName>
        </View>
        
        {userPhoto ? <ImagePhoto source={{ uri: userPhoto }} />: <ImagePhoto source={Logo} />}
          <AddPhoto onPress={() =>
            launchImageLibrary(imagePickerOptions, imagepickerCallback)}
            />
      </Container>
    </>
  )
}

export default Header;