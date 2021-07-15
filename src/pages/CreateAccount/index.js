import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

import { Image } from 'react-native'
import Logo from '../../assets/logo.png';
import { warningCreateAccount } from '../../utils/warnings'

import WarningMessage from '../../components/WarningMessage';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

const CreateAccount = () => {
  const navigation = useNavigation();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  function navigateToLogin() {
    navigation.navigate('Login')
  };

  async function handleSubmit() {

    if (!email || !password) {
      return setMessage('E-mail ou senha nulos')
    }
    setLoading(true)
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
      // console.tron.log('Sucesso')
    } catch (error) {
      setMessage(warningCreateAccount(error.code))
      setError(true)
      //console.tron.log('error', error)
    } finally {
      setLoading(false)
    }
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
          value={name}
          onChangeText={setName}
        />

        <FormInput
          error={error}
          icon='mail-outline'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
          placeholder="Digite seu e-mail"
          returnKeyType='next'
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          error={error}
          icon='lock-outline'
          secureTextEntry
          placeholder="Digite sua senha"
          returnKeyType='send'
          ref={passwordRef}
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        {message ? <WarningMessage message={message} /> : null}

        <SubmitButton loading={loading} onPress={handleSubmit}>Cadastrar</SubmitButton>
      </Form>

      <SignLink onPress={navigateToLogin}>
        <SignLinkText>Voltar para login</SignLinkText>
      </SignLink>
    </Container>
  )
}

export default CreateAccount;