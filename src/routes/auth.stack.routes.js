import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import { colors } from "../common/colors";

import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";

const { Navigator, Screen } = createStackNavigator();

const Auth = () => {

  return (
    <Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.transparent
      }
    }}>
      <Screen name="Login" component={Login} />
      <Screen name="CreateAccount" component={CreateAccount} />
    </Navigator>
  )
}
export default Auth;