import React from 'react';
import { SocialIcon } from '@rneui/base';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

const dataList = [
  {
    type: 'google',
  },
  {
    type: 'twitter',
  },
  {
    type: 'facebook',
  },
];
const WithSocial = () => {
  return (
    <View style={styles.icon}>
      {dataList.map((l, index) => (
        <TouchableOpacity activeOpacity={0.85} onPress={() => {}} key={index}>
          <SocialIcon type={l.type} iconType="font-awesome" key={index} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default WithSocial;
