import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import screenOptions from "../constants/screenOptions";
import Dashboard from "../pages/Dashboard";
import HeaderRight from "../components/HeaderRight";

const Stack = createStackNavigator();

const App = () => {

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Dashboard" component={Dashboard}
        options={{
          title: 'Bem-vindo ao Gallery App',
          headerRight: () => <HeaderRight />
        }} />
    </Stack.Navigator>
  )
}
export default App