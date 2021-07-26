import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'

import Auth from './auth.stack.routes';
import App from './app.tabs.routes';

export default function Routes() {
  const user = useSelector(state => state.user)
  return (
    <NavigationContainer>
     {user ?  <App /> : <Auth />}
    </NavigationContainer>
  )
}