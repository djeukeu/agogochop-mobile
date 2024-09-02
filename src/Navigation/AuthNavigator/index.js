import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../Constants/Colors';

import Login from '../../Screens/Login';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        contentStyle: { backgroundColor: Colors.background },
        headerBackTitleVisible: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="LoginScreen" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
