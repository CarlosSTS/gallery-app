import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Routes from './routes';
import './config/reactotron';

import Background from './components/Background'
import { colors } from './common/colors';

import {store,persistor} from './store';

LogBox.ignoreLogs([
  'Expected style "height:',
  'Clipboard has been extracted from react-native core and will be removed in a future release'
])

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Background>
        <Routes />
        <StatusBar
          barStyle='light-content'
          backgroundColor={colors.initial}
          translucent={false}
        />
      </Background>
      </PersistGate>
    </Provider>
  )
}

export default App;