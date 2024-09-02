import React from 'react';
import { Icon } from '@rneui/base';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import MoreNavigator from './MoreNavigator';
import MyKitchenNavigator from './MyKitchenNavigator';
import ProfileNavigator from './ProfileNavigator';
import Colors from '../../Constants/Colors';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="MarketplaceHome"
      activeColor={Colors.primary}
      barStyle={{ backgroundColor: Colors.light_white }}
      inactiveColor={Colors.grey}
      activeIndicatorStyle={{
        backgroundColor:
          Platform.OS === 'ios' ? Colors.transparent : Colors.light_white,
      }}
      shifting={true}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: (props) => {
            return <Icon name="home" size={24} color={props.color} />;
          },
          // tabBarLabel: t('marketplace.home'),
        }}
      />
      <Tab.Screen
        name="MyKitchen"
        component={MyKitchenNavigator}
        options={{
          tabBarIcon: (props) => {
            return <Icon name="soup-kitchen" size={24} color={props.color} />;
          },
          // tabBarLabel: t('marketplace.home'),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: (props) => {
            return <Icon name="shopping-cart" size={24} color={props.color} />;
          },
          tabBarBadge: 1,
          // tabBarLabel: t('marketplace.home'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: (props) => {
            return (
              <Icon
                name="user"
                size={24}
                color={props.color}
                type="font-awesome"
              />
            );
          },
          // tabBarLabel: t('marketplace.home'),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreNavigator}
        options={{
          tabBarIcon: (props) => {
            return <Icon name="reorder" size={24} color={props.color} />;
          },
          // tabBarLabel: t('marketplace.home'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
