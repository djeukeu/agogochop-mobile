import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../../Constants/Colors';
import MyKitchen from '../../../Screens/MyKitchen';

const Stack = createNativeStackNavigator();

const MyKitchenNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyKitchenScreen"
      screenOptions={{
        headerBackVisible: false,
        contentStyle: { backgroundColor: Colors.background },
      }}>
      <Stack.Screen name="MyKitchenScreen" component={MyKitchen} />
    </Stack.Navigator>
  );
};

export default MyKitchenNavigator;
