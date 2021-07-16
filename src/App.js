import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar,LogBox } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './routes';
import './config/reactotron';

import Background from './components/Background'
import { colors } from './common/colors';

import store from './store';

LogBox.ignoreLogs(['Expected style "height: 196.36363636363637" to contain units '])

const App = () => {
  return (
    <Provider store={store}>
    <Background>
      <Routes />
      <StatusBar
      barStyle='light-content'
      backgroundColor={colors.initial}
      translucent={false}
      />
    </Background>
    </Provider>
  )
}

export default App;