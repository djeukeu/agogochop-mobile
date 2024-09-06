import React, { useState, useEffect } from 'react';
import { countries } from 'country-data';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import * as RNLocalize from 'react-native-localize';
import { configureFonts, TextInput } from 'react-native-paper';
import styles from './styles';
import Colors from '../../Constants/Colors';

const countryData = countries[RNLocalize.getCountry()];
const initialDialCode = countryData.countryCallingCodes[0];
const initialFlag = countryData.emoji;

const CustomPhoneInput = (props) => {
  const { value, label, errorMessage, setDialCode } = props;
  const [country, setCountry] = useState(initialFlag + ' ' + initialDialCode);
  const [show, setShow] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setDialCode(initialDialCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closePicker = () => {
    setShow(false);
  };

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
    <>
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
          left={
            <TextInput.Affix
              text={country + ' | '}
              onPress={() => {
                setShow(true);
              }}
              textStyle={{ color: Colors.black }}
            />
          }
          theme={{
            fonts: configureFonts(fontConfig),
          }}
        />
        {!!errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
      </View>
      <CountryPicker
        show={show}
        pickerButtonOnPress={(item) => {
          setCountry(item.flag + ' ' + item.dial_code);
          setDialCode(item.dial_code);
          closePicker();
        }}
        lang={i18n.language}
        searchMessage={t('countryPicker.nocountry')}
        inputPlaceholder={t('countryPicker.searchcountry')}
        onBackdropPress={closePicker}
        enableModalAvoiding={true}
        style={{
          modal: {
            height: 250,
            backgroundColor: Colors.white,
          },
          countryName: {
            color: Colors.black,
          },
          dialCode: {
            color: Colors.black,
          },
          countryButtonStyles: {
            backgroundColor: Colors.light_white,
          },
          textInput: {
            fontFamily: 'Helvetica',
          },
          searchMessageText: {
            fontFamily: 'Helvetica',
            color: Colors.black,
          },
        }}
      />
    </>
  );
};

export default CustomPhoneInput;
