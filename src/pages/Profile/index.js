import React, { useState } from 'react';
import { Alert, Clipboard } from 'react-native'
import { useDispatch,connect, useSelector } from 'react-redux'

import { handleResetPassword } from '../../store/modules/user/actions';
import { warningAccount } from '../../utils/warnings'

import WarningMessage from '../../components/WarningMessage';
import Background from '../../components/Background'
import Header from '../../components/Header'
import Line from '../../components/Line'

import {
  Container,
  Info,
  SubmitButton,
  FormInput,
  Form
} from './styles'

const Profile = ({ series }) => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function resetPassword() {
    if (!email) {
      return setMessage('E-mail nulo/inválido')
    }
    setLoading(true)
    try {
      await 
      dispatch(handleResetPassword({ email }))
       Alert.alert('Sucesso','Enviaremos um e-mail para que possa redefinir sua senha  😄')
    } catch (error) {
      setMessage(warningAccount(error.code))
      setError(true)
     // console.tron.log('error', error)
    } finally {
      setLoading(false)
      setEmail('')

    }
  }

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString()
    setEmail(text)
  }

  const copyToClipboard = () => {
    Clipboard.setString(user.email)
    Alert.alert(
      'Sucesso e-mail copiado.',
      `Seu e-mail é: ${user.email}, gostaria de aplicá-lo na recuperação de senha ?`,
      [
        {
          text: "Não",
          style: "cancel"
        },
        { text: "Sim ✏️", onPress: () => fetchCopiedText() }
      ], {
      cancelable: false
    })
  }

  return (
    <Background>
      <Header />
      <Container>
        <Info>Informações adicionais</Info>
        <Line label="E-mail" content={user.email} color icon='content-copy' onPress={copyToClipboard} />
        <Line label="Total de" content={`${!series ? 0 : series.length} itens na galeria`} color />
        <Info>Recuperar senha</Info>
        <Form>
          <FormInput
            error={error && message}
            icon='mail-outline'
            keyboardType='email-address'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder="Seu e-mail de acesso"
            returnKeyType='send'
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={resetPassword}
          />
          {message ? <WarningMessage message={message} /> : null}
          <SubmitButton loading={loading} onPress={resetPassword}>Enviar</SubmitButton>
        </Form>
      </Container>
    </Background>
  )
}

const mapStateToProps = state => {
  const { series } = state;
  if (!series) {
    return { series }
  }
  const keys = Object.keys(series)
  const seriesWithKeys = keys.map(id => {
    return { ...series[id], id }
  })
  return { series: seriesWithKeys }
}

export default connect(mapStateToProps, null)(Profile);