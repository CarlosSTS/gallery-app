import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Background from './components/Background'
import { colors } from './common/colors';

import Routes from './routes'
import './config/reactotron';

const App = () => {
  return (
    <Background>
      <Routes />
      <StatusBar
      barStyle='light-content'
      backgroundColor={colors.transparent}
      translucent
      />
    </Background>
  )
}

export default App;