import React, {useEffect, useState} from 'react';
import {View, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import imagePickerOptions from '../../constants/imagePickerOptions';

import Logo from '../../assets/logo.png';
import {Container, ImagePhoto, UserName, Greetings, AddPhoto} from './styles';

function Header() {
  const [userPhoto, setUserPhoto] = useState('');
  const user = useSelector(state => state.user?.user);

  async function imagepickerCallback(data) {
    if (data.didCancel) return;
    if (data.error) {
      return Alert.alert('Aviso', 'Erro ao enviar imagem');
    }
    if (!data.assets[0].uri) {
      return Alert.alert('Aviso', 'Imagem não encontrada');
    }
    const {uri: image} = data.assets[0];

    await AsyncStorage.setItem('@gallery:image', image);
    setUserPhoto(image);
  }

  useEffect(() => {
    async function loadStorageUserName() {
      const image = await AsyncStorage.getItem('@gallery:image');
      setUserPhoto(image || '');
    }
    loadStorageUserName();
  }, [userPhoto]);

  return (
    <>
      <Container>
        <View>
          <Greetings>Olá,</Greetings>
          <UserName>{user?.displayName || 'Bem-vindo'}</UserName>
        </View>

        {userPhoto ? (
          <ImagePhoto source={{uri: userPhoto}} />
        ) : (
          <ImagePhoto source={Logo} />
        )}
        <AddPhoto
          onPress={() =>
            launchImageLibrary(imagePickerOptions, imagepickerCallback)
          }
        />
      </Container>
    </>
  );
}

export default Header;
