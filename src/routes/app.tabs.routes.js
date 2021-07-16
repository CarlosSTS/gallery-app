import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  MaterialIcons  from "react-native-vector-icons/MaterialIcons";

import { colors } from '../common/colors'
import tabBarOptions from "../constants/tabBarOptions";

import Dashboard from "../pages/Dashboard";

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
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name="account-circle"
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