import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {connect} from 'react-redux'

import {handleCreateAccount} from '../../store/modules/user/actions';

import Logo from '../../assets/logo.png';

import { warningAccount } from '../../utils/warnings'

import WarningMessage from '../../components/WarningMessage';
import ButtonDetail from '../../components/ButtonDetail'

import { Container, Form, FormInput, SubmitButton } from './styles';

const CreateAccount = ({handleCreateAccount}) => {
  const navigation = useNavigation();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('carloss@gmail.com')
  const [email, setEmail] = useState('carloss@gmail.com')
  const [password, setPassword] = useState('carloss@gmail.com')
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
      await handleCreateAccount({email, password})
      AsyncStorage.setItem('@gallery:user', name)
       // setMessage('Sucesso')
      // console.tron.log('Sucesso')
    } catch (error) {
      setMessage(warningAccount(error.code))
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
          maxLength={20}
          placeholder="Digite seu nome (opicional)"
          returnKeyType='next'
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />

        <FormInput
          error={error && message}
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
          error={error && message}
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

     <ButtonDetail onPress={navigateToLogin}>
       Voltar para login
     </ButtonDetail>
    </Container>
  )
}

export default connect(null,{handleCreateAccount})(CreateAccount);