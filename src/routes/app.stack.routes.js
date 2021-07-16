import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./app.tabs.routes";
import screenOptions from "../constants/screenOptions";

const Stack = createStackNavigator();

const App = () => {

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Dashboard" component={Dashboard} 
      />
     
    </Stack.Navigator>
  )
}
export default App;