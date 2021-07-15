import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import Logo from '../../assets/logo.png';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

const CreateAccount = () => {
  const navigation = useNavigation();
  const emailRef = useRef();
  const passwordRef = useRef();

  function navigateToLogin() {
    navigation.navigate('Login')
  };

  function handleSubmit() {
    console.tron.log('Criou')
  }

  return (
    <Container>
      <Image source={Logo} />

      <Form>
        <FormInput
          icon='person-outline'
          autoCorrect={false}
          autoCapitalize='none'
          placeholder="Digite seu nome completo (opicional)"
          returnKeyType='next'
          onSubmitEditing={() => emailRef.current.focus()}
        />

        <FormInput
          icon='mail-outline'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
          placeholder="Digite seu e-mail"
          returnKeyType='next'
          ref={emailRef}
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

        <SubmitButton>Cadastrar</SubmitButton>
      </Form>

      <SignLink onPress={navigateToLogin}>
        <SignLinkText>Voltar para login</SignLinkText>
      </SignLink>
    </Container>
  )

}

export default CreateAccount;