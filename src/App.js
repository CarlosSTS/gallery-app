import 'react-native-gesture-handler';
import React from 'react';

import Background from './components/Background'
import Routes from './routes'
import './config/reactotron';

const App = () => {
console.tron.log('hello')
  return (
    <Background>
      <Routes />
    </Background>
  )
}

export default App;