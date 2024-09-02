import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../../Constants/Colors';
import Home from '../../../Screens/Home';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerBackVisible: false,
        contentStyle: { backgroundColor: Colors.background },
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
