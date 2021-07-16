import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { colors } from '../common/colors'
import tabBarOptions from "../constants/tabBarOptions";

import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Form from "../pages/Form";

const { Navigator, Screen } = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Navigator
      tabBarOptions={tabBarOptions}
    >
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
        options={{
          tabBarLabel: "Salvar",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="image-plus"
                size={size}
                color={focused ? colors.white : color}
              />
            );
          },
        }}
      />

    </Navigator>
  );
}
export default TabRoutes;