import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

import { Image } from 'react-native'
import Logo from '../../assets/logo.png';
import WarningMessage from '../../components/WarningMessage';
import { warningLogin } from '../../utils/warnings'
import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

const Login = () => {
  const navigation = useNavigation();
  const passwordRef = useRef();

  const [email, setEmail] = useState('carlossts826@gmail.com')
  const [password, setPassword] = useState('carlossts826@gmail.com')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  function navigateToCreateAccount() {
    navigation.navigate('CreateAccount')
  };

  async function handleSubmit() {

    if (!email || !password) {
      return setMessage('E-mail ou senha nulos')
    }
    setLoading(true)
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        setMessage('Sucesso')
      // console.tron.log('Sucesso')
    } catch (error) {
      setMessage(warningLogin(error.code))
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
          error={error}
          icon='mail-outline'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
          placeholder="Digite seu e-mail"
          returnKeyType='next'
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
        <SubmitButton loading={loading} onPress={handleSubmit}>Entrar</SubmitButton>
      </Form>

      <SignLink onPress={navigateToCreateAccount}>
        <SignLinkText>Criar conta gratuita</SignLinkText>
      </SignLink>
    </Container>
  )
}

export default Login;