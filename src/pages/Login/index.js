import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native'
import { useDispatch } from 'react-redux'

import { handleLogin } from '../../store/modules/user/actions';

import { version } from '../../../package.json'
import Logo from '../../assets/logo.png';
import { warningAccount } from '../../utils/warnings'

import WarningMessage from '../../components/WarningMessage';
import ButtonDetail from '../../components/ButtonDetail'

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Version
} from './styles';

const Login = ({ }) => {
  const navigation = useNavigation();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('carloss@gmail.com')
  const [password, setPassword] = useState('carloss@gmail.com')
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
      await dispatch(handleLogin({ email, password }))
      // setMessage('Sucesso')
      // console.tron.log('Sucesso')
    } catch (error) {
      setMessage(warningAccount(error.code))
      setError(true)
      console.tron.log('error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Image source={Logo} />

      <Form>
        <FormInput
          error={error && message}
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
          error={error && message}
          icon='lock-outline'
          secureTextEntry
          placeholder="Digite sua senha"
          returnKeyType='send'
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleSubmit}
        />
        {message ? <WarningMessage message={message} /> : null}
        <SubmitButton loading={loading} onPress={handleSubmit}>Entrar</SubmitButton>
      </Form>

      <ButtonDetail onPress={navigateToCreateAccount}>
        Criar conta gratuita
      </ButtonDetail>

      <Version>{version}</Version>
    </Container>
  )
}

export default Login;