import React from 'react';
import { Icon } from '@rneui/base';
import { Animated, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Colors from '../../Constants/Colors';

const AuthTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.wrapper}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={0.85}
            style={{
              ...styles.container,
              backgroundColor: isFocused ? Colors.primary : Colors.secondary,
            }}>
            <Icon
              name={options.tabBarIcon}
              size={24}
              color={isFocused ? Colors.secondary : Colors.white}
            />
            <Animated.Text
              style={{
                ...styles.label,
                color: isFocused ? Colors.secondary : Colors.white,
              }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AuthTabBar;
