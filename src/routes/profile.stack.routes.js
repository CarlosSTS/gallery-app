import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import screenOptions from "../constants/screenOptions";
import HeaderRight from "../components/HeaderRight";

import Profile from "../pages/Profile";

const Stack = createStackNavigator();

const App = () => {

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Profile" component={Profile}
        options={{
          title: 'Bem-vindo ao Gallery App',
          headerRight: () => <HeaderRight />
        }} />
    </Stack.Navigator>
  )
}
export default App