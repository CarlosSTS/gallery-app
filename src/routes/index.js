import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import Auth from './auth.stack.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  )
}