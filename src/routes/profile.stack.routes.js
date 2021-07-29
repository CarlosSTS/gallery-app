import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import {handleLogout} from '../store/modules/user/actions'

import screenOptions from "../constants/screenOptions";
import HeaderRight from "../components/HeaderRight";

import Profile from "../pages/Profile";

const { Navigator, Screen } = createStackNavigator();

const App = ({handleLogout}) => {

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Profile" component={Profile}
        options={{
          title: 'Bem-vindo ao Gallery App',
          headerRight: () => <HeaderRight onPress={handleLogout} />
        }}
      />
    </Navigator>
  )
}
export default connect(null,{handleLogout})(App)