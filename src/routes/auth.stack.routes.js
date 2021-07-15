import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import { colors } from "../common/colors";

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
    </Stack.Navigator>
  )
}
export default Auth;