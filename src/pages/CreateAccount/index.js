import React, { useState, useRef, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

import Logo from '../../assets/logo.png';

import { warningAccount } from '../../utils/warnings';

import WarningMessage from '../../components/WarningMessage';
import ButtonDetail from '../../components/ButtonDetail';

import { Container, Form, FormInput, SubmitButton } from './styles';

const CreateAccount = ({ }) => {
  const navigation = useNavigation();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const navigateToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  async function handleSubmit() {
    if (!name) {
      setMessage('Nome obrigatório');
      return;
    }
    if (!email) {
      setMessage('E-mail obrigatório');
      return;
    }
    if (!password) {
      setMessage('Senha obrigatório');
      return;
    }

    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await auth().currentUser?.updateProfile({
        displayName: name,
      });
      Alert.alert('Usuário cadastrado com sucesso', 'Você já pode fazer login na aplicação', [
        {
          text: 'Vamos lá',
          onPress: navigateToLogin,
          style: 'default'
        }
      ], { cancelable: false })
    } catch (error) {
      setMessage(warningAccount(error.code));
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Image source={Logo} />

      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={20}
          placeholder="Digite seu nome (opicional)"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />

        <FormInput
          error={error && message}
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          error={error && message}
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
          autoCapitalize="none"
          returnKeyType="send"
          ref={passwordRef}
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        {message ? <WarningMessage message={message} /> : null}

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Cadastrar
        </SubmitButton>
      </Form>

      <ButtonDetail onPress={navigateToLogin}>Voltar para login</ButtonDetail>
    </Container>
  );
};

export default CreateAccount;
