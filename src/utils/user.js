import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sentry from '@sentry/react-native';

const key = 'userData';

const getAuthData = async () => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      const transformedValue = JSON.parse(value);
      return transformedValue;
    }
    return null;
  } catch (err) {
    Sentry.captureException(err);
  }
};

const saveAuthData = async (userInfo) => {
  try {
    const data = JSON.stringify(userInfo);
    await AsyncStorage.setItem(key, data);
  } catch (err) {
    Sentry.captureException(err);
  }
};

const removeAuthData = async () => {
  try {
    const value = await AsyncStorage.removeItem(key);
    return value;
  } catch (err) {
    Sentry.captureException(err);
  }
};

export { removeAuthData, saveAuthData, getAuthData };
