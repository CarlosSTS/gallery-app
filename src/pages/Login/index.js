import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import Logo from '../../assets/logo.png';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

const Login = () => {
  const navigation = useNavigation();
  const passwordRef = useRef();

  function navigateToCreateAccount() {
    navigation.navigate('CreateAccount')
  };
  function handleSubmit() {
    console.tron.log('Logou')
  }

  return (
    <Container>
      <Image source={Logo} />

      <Form>
        <FormInput
          icon='mail-outline'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
          placeholder="Digite seu e-mail"
          returnKeyType='next'
          onSubmitEditing={() => passwordRef.current.focus()}
        />

        <FormInput
          icon='lock-outline'
          secureTextEntry
          placeholder="Digite sua senha"
          returnKeyType='send'
          ref={passwordRef}
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton>Entrar</SubmitButton>
      </Form>

      <SignLink onPress={navigateToCreateAccount}>
        <SignLinkText>Criar conta gratuita</SignLinkText>
      </SignLink>
    </Container>
  )

}

export default Login;