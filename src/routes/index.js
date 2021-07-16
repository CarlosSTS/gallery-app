import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'

import Auth from './auth.stack.routes';
import App from './app.stack.routes';

 function Routes({user}) {
  
  return (
    <NavigationContainer>
     {user ?  <App /> : <Auth />}
    </NavigationContainer>
  )
}

export default connect(state =>({
user: state.user
}))(Routes)