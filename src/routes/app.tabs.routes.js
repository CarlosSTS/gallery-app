import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { colors } from '../common/colors'
import tabBarOptions from "../constants/tabBarOptions";

import Dashboard from "./dashboard.stack.routes";
import Profile from "./profile.stack.routes";
import Form from "../pages/Form";

const { Navigator, Screen } = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Navigator initialRouteName="Dashboard" tabBarOptions={tabBarOptions}>
      
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name='folder-multiple-image'
                size={size}
                color={focused ? colors.white : color}
              />
            );
          },
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "account-circle" : 'account-circle-outline'}
                size={size}
                color={focused ? colors.white : color}
              />
            );
          },
        }}
      />

      <Screen
        name="Form"
        component={Form}
        options={({route}) => {
          const {params} =route;
          return({
          tabBarLabel: params  ? "Salvar" : "Adicionar",
          tabBarIcon: ({ color, size, focused }) => 
              <MaterialCommunityIcons
                name={params ? 'content-save-edit': "image-plus"}
                size={size}
                color={focused ? colors.white : color}
              />
        })}}
      />

    </Navigator>
  );
}
export default TabRoutes;