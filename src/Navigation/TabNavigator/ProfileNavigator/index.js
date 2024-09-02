import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../../Constants/Colors';
import Profile from '../../../Screens/Profile';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerBackVisible: false,
        contentStyle: { backgroundColor: Colors.background },
      }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
