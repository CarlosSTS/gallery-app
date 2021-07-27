import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect, useSelector } from "react-redux";

import { colors } from '../common/colors'
import tabBarOptions from "../constants/tabBarOptions";

import Dashboard from "./dashboard.stack.routes";
import Profile from "./profile.stack.routes";
import CreateForm from "../pages/CreateForm";

const { Navigator, Screen } = createBottomTabNavigator();

function TabRoutes({ series }) {

  return (
    <Navigator initialRouteName="Dashboard" tabBarOptions={tabBarOptions}>

      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarBadge: !series ? 0 : series.length,
          tabBarBadgeStyle: { backgroundColor: colors.initial, color: colors.white },
          tabBarIcon: ({ color, size, focused }) =>
            <MaterialCommunityIcons
              name='folder-multiple-image'
              size={size}
              color={focused ? colors.white : color}
            />
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size, focused }) =>
            <MaterialCommunityIcons
              name={focused ? "account-circle" : 'account-circle-outline'}
              size={size}
              color={focused ? colors.white : color}
            />
        }}
      />

      <Screen
        name="CreateForm"
        component={CreateForm}
        options={{
          tabBarLabel: "Adicionar",
          tabBarIcon: ({ color, size, focused }) =>
            <MaterialCommunityIcons
              name="image-plus"
              size={size}
              color={focused ? colors.white : color}
            />
        }}
      />

    </Navigator>
  );
}
const mapStateToProps = state => {
  const { series } = state;
  if (!series) {
    return { series }
  }

  const keys = Object.keys(series)
  const seriesWithKeys = keys.map(id => {
    return { ...series[id], id }
  })
  return { series: seriesWithKeys }
}
export default connect(mapStateToProps, null)(TabRoutes)
