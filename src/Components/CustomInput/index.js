import React from 'react';
import { View, Text } from 'react-native';
import { configureFonts, TextInput } from 'react-native-paper';
import styles from './styles';
import Colors from '../../Constants/Colors';

const CustomInput = (props) => {
  const { value, label, errorMessage } = props;

  const fontConfig = {
    android: {
      regular: {
        fontFamily: 'Helvetica',
      },
      medium: {
        fontFamily: 'Helvetica',
      },
      light: {
        fontFamily: 'Helvetica',
      },
      thin: {
        fontFamily: 'Helvetica',
      },
    },
  };

  return (
    <View>
      <TextInput
        {...props}
        label={label}
        underlineColor={Colors.grey}
        selectionColor={Colors.black}
        cursorColor={Colors.black}
        activeUnderlineColor={Colors.primary}
        textColor={Colors.black}
        value={value}
        style={styles.input}
        theme={{
          fonts: configureFonts(fontConfig),
        }}
      />
      {!!errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomInput;
