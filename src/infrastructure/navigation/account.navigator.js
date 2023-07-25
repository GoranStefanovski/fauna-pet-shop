import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from '../../features/account/screens/account.screen'
import { LoginScreen } from '../../features/account/screens/login.screen'
import { RegisterScreen } from '../../features/account/screens/register.screen'
import { ResetPassword } from "../../features/account/screens/reset.password.screen";
import { EmailVerificationScreen } from "../../features/account/screens/email.verification.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen
      name="Main"
      component={AccountScreen}/>
    <Stack.Screen
      name="Login"
      component={LoginScreen}/>
    <Stack.Screen
      name="Register"
      component={RegisterScreen}/>
    <Stack.Screen
      name="ResetPassword"
      component={ResetPassword}/>
          <Stack.Screen
      name="EmailVerification"
      component={EmailVerificationScreen}/>
  </Stack.Navigator>
);
