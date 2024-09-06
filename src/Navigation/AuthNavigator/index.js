import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthHeader from '../../Components/AuthHeader';
import Colors from '../../Constants/Colors';

import Login, { LoginOptions } from '../../Screens/Login';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        header: (props) => <AuthHeader {...props} />,
        contentStyle: { backgroundColor: Colors.background },
        headerBackTitleVisible: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={LoginOptions}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
