import React from 'react';
import * as Sentry from '@sentry/react-native';
import { I18nextProvider } from 'react-i18next';
import { PaperProvider } from 'react-native-paper';
import config from './src/config';
import AppNetworkProvider from './src/Contexts/AppNetworkProvider';
import i18nInstance from './src/i18n';
import Navigation from './src/Navigation';

Sentry.init({
  dsn: config.sentry_dsn,
  enabled: config.env !== 'development',
  environment: config.env,
});

const App = () => {
  return (
    <PaperProvider>
      <AppNetworkProvider>
        <I18nextProvider i18n={i18nInstance}>
          <Navigation />
        </I18nextProvider>
      </AppNetworkProvider>
    </PaperProvider>
  );
};

export default Sentry.wrap(App);
