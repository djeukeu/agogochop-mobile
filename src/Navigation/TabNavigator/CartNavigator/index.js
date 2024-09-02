import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../../Constants/Colors';
import Cart from '../../../Screens/Cart';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{
        headerBackVisible: false,
        contentStyle: { backgroundColor: Colors.background },
      }}>
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
