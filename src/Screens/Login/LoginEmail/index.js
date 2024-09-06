import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as yup from 'yup';
import CustomInput from '../../../Components/CustomInput';
import GradientButton from '../../../Components/GradientButton';
import WithSocial from '../../../Components/WithSocial';
import Colors from '../../../Constants/Colors';
import styles from '../styles';

const initialValues = {
  email: '',
  password: '',
};

const LoginEmail = (props) => {
  const { t } = useTranslation();
  const [securePassword, setSecurePassword] = useState(true);

  const schema = yup.object({
    email: yup.string().email().required(t('login.emailReq')),
    password: yup.string().min(8).required(t('login.passwordRequired')),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="padding">
        <CustomInput
          label={t('login.email')}
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          keyboardType="email-address"
          errorMessage={formik.touched.email && formik.errors.email}
        />
        <CustomInput
          label={t('login.password')}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          errorMessage={formik.touched.password && formik.errors.password}
          secureTextEntry={securePassword}
          right={
            <TextInput.Icon
              icon={securePassword ? 'eye-off' : 'eye'}
              forceTextInputFocus={false}
              size={18}
              color={Colors.black}
              onPress={() => {
                setSecurePassword(!securePassword);
              }}
            />
          }
        />
        <Text
          style={styles.forgotPassword}
          suppressHighlighting={true}
          onPress={() => {
            // props.navigation.navigate('ForgotPasswordScreen');
          }}>
          {t('login.forgotPassword')}
        </Text>
        <View style={styles.formInput} />
      </KeyboardAvoidingView>
      <GradientButton title={t('login.txt')} onPress={formik.handleSubmit} />
      <View style={styles.loginWith}>
        <Text style={styles.loginWithText}>{t('login.loginWith')}</Text>
        <WithSocial />
      </View>
      <Text style={styles.register}>
        {t('login.no-account')}
        <Text
          style={styles.registerText}
          suppressHighlighting={true}
          onPress={() => {
            // props.navigation.navigate('Register');
          }}>
          {' '}
          {t('login.register')}
        </Text>
      </Text>
    </ScrollView>
  );
};

export default LoginEmail;
