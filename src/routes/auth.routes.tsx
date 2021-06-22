import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator headerMode="none" screenOptions={{
      cardStyle: {
        backgroundColor: "transparent"
      }
      }}>
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={HomeScreen}
      />
    </Navigator>
  )
}
