import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import screenOptions from "../constants/screenOptions";
import HeaderLeft from '../components/HeaderLeft'

import Dashboard from "../pages/Dashboard";
import Detail from '../pages/Detail';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Dashboard" component={Dashboard}
        options={{ headerShown: false }}
      />
      <Screen name="Detail" component={Detail}
        options={({ route }) => ({ 
          title: route.params.serie.title || 'Essa série não possui título',
          headerLeft: () => <HeaderLeft  />
        })}
      />
    </Navigator>
  )
}
export default Routes