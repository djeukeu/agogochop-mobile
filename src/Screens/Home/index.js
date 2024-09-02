import React from 'react';
import { Button } from '@rneui/base';
import { View } from 'react-native';
import styles from './styles';

const Home = (props) => {
  return (
    <View style={styles.screen}>
      <Button
        title={'Login'}
        onPress={() => {
          props.navigation.navigate('Auth');
        }}
      />
    </View>
  );
};

export default Home;
