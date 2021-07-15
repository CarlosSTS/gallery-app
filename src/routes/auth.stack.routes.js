import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import { colors } from "../common/colors";

import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";

const Stack = createStackNavigator();

const Auth = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.transparent
      }
    }}>
      <Stack.Screen name="Login" component={Login}
      />
      <Stack.Screen name="CreateAccount" component={CreateAccount}
      />
    </Stack.Navigator>
  )
}
export default Auth;