import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import { colors } from "../common/colors";

import Dashboard from "./app.tabs.routes";

const Stack = createStackNavigator();

const App = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.transparent
      }
    }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  )
}
export default App