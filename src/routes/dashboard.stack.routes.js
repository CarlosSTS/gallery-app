import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import screenOptions from "../constants/screenOptions";

import Dashboard from "../pages/Dashboard";
import Detail from '../pages/Detail'
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Dashboard" component={Dashboard}
        options={{ headerShown: false }}
         />
           <Stack.Screen name="Detail" component={Detail}
           options={({route}) =>  ({ title: route.params.serie.title || 'Essa série não possui nome' })}
         />
    </Stack.Navigator>
  )
}
export default Routes