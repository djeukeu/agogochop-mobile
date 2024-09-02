import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../../Constants/Colors';
import More from '../../../Screens/More';

const Stack = createNativeStackNavigator();

const MoreNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MoreScreen"
      screenOptions={{
        headerBackVisible: false,
        contentStyle: { backgroundColor: Colors.background },
      }}>
      <Stack.Screen name="MoreScreen" component={More} />
    </Stack.Navigator>
  );
};

export default MoreNavigator;
