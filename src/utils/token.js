import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sentry from '@sentry/react-native';

const key = 'userToken';

const getToken = async () => {
  try {
    const val = await AsyncStorage.getItem(key);
    return val;
  } catch (err) {
    console.log(err);
  }
};
const setToken = async (token) => {
  try {
    await AsyncStorage.setItem(key, token);
  } catch (err) {
    Sentry.captureException(err);
  }
};

const clearToken = async () => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    Sentry.captureException(err);
  }
};

export { getToken, setToken, clearToken };
