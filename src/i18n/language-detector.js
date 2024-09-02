import * as RNLocalize from 'react-native-localize';
import { getLng } from '../utils/language';

export const detectUserLanguage = async (callback) => {
  const saveLanguage = await getLng();
  if (!saveLanguage) {
    const locale = RNLocalize.getLocales()[0];
    const { languageCode } = locale;
    callback(languageCode);
  } else {
    callback(saveLanguage);
  }
};
