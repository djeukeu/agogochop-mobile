import React from 'react';
import { Button } from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Colors from '../../Constants/Colors';

const GradientButton = ({ title, loading, onPress }) => {
  return (
    <Button
      title={title}
      loading={loading}
      loadingProps={{
        color: Colors.white,
      }}
      onPress={onPress}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: [Colors.primary, '#fabc23'],
        start: { x: 0.1, y: 0.9 },
        end: { x: 0.8, y: 0.2 },
      }}
      activeOpacity={0.85}
      titleStyle={styles.btnTitle}
      buttonStyle={styles.btnStyle}
    />
  );
};

export default GradientButton;
