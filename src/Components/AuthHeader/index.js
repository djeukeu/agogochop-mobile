import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { Icon } from '@rneui/base';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import styles from './styles';
import Colors from '../../Constants/Colors';

const AuthHeader = (props) => {
  const { t } = useTranslation();
  const { route, options } = props;
  const title = getHeaderTitle(options, route.name);
  const backBtn = props.navigation.canGoBack();

  return (
    <View style={styles.container}>
      {backBtn && (
        <TouchableOpacity style={styles.back}>
          <Icon
            name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'}
            color={Colors.secondary}
            size={24}
          />
          <Text style={styles.backTxt}>Back</Text>
        </TouchableOpacity>
      )}
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.headerTitle}>{t(`${title}.txt`)}</Text>
      </View>
    </View>
  );
};

export default AuthHeader;
