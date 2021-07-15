import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input'

const Login = () => {

  return (
    <>
      <Input
        style={{ marginTop: 30 }}
        icon='call'
        placeholder='Digite seu nome'
      />
      <Button>Entrar</Button>
    </>
  )

}

export default Login;