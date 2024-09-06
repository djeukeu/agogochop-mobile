import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { Icon } from '@rneui/base';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import Colors from '../../Constants/Colors';

const AuthHeader = (props) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const { route, options } = props;
  const title = getHeaderTitle(options, route.name);
  const backBtn = props.navigation.canGoBack();

  return (
    <View style={{ ...styles.container, marginTop: insets.top }}>
      {backBtn && (
        <TouchableOpacity
          style={styles.back}
          activeOpacity={0.63}
          onPress={() => {
            props.navigation.goBack();
          }}>
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
