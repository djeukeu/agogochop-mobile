import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTranslation } from 'react-i18next';
import LoginEmail from './LoginEmail';
import LoginPhone from './LoginPhone';
import AuthTabBar from '../../Components/AuthTabBar';

const Tab = createMaterialTopTabNavigator();

const Login = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      tabBar={(props) => <AuthTabBar {...props} />}
      initialRouteName="LoginEmailScreen"
      screenOptions={{
        animationEnabled: true,
        swipeEnabled: false,
      }}>
      <Tab.Screen
        name="LoginEmailScreen"
        component={LoginEmail}
        options={{
          tabBarLabel: t('login.emailLogin'),
          tabBarIcon: 'email',
        }}
      />
      <Tab.Screen
        name="LoginPhoneScreen"
        component={LoginPhone}
        options={{
          tabBarLabel: t('login.phoneLogin'),
          tabBarIcon: 'phone',
        }}
      />
    </Tab.Navigator>
  );
};

export const LoginOptions = () => {
  return {
    headerTitle: 'login',
  };
};

export default Login;
