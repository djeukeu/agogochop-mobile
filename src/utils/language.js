import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sentry from '@sentry/react-native';

const key = 'userLanguage';

export const storeLng = async (lng) => {
  try {
    await AsyncStorage.setItem(key, lng);
  } catch (err) {
    Sentry.captureException(err);
  }
};

export const getLng = async () => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (err) {
    Sentry.captureException(err);
  }
};
