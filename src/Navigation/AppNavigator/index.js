import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../Constants/Colors';
import AuthNavigator from '../AuthNavigator';
import TabNavigator from '../TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        statusBarColor: Colors.primary,
        contentStyle: { backgroundColor: Colors.background },
        // headerBackTitle: t('back'),
      }}>
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{
          animation: 'fade',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
