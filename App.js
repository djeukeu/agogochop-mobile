import React from 'react';
import { ApolloProvider } from '@apollo/client';
import * as Sentry from '@sentry/react-native';
import { I18nextProvider } from 'react-i18next';
import { PaperProvider } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { RemoteClient } from './src/Apollo';
import config from './src/config';
import AppNetworkProvider from './src/Contexts/AppNetworkProvider';
import i18nInstance from './src/i18n';
import Navigation from './src/Navigation';

import 'moment/locale/fr';

enableScreens();

Sentry.init({
  dsn: config.sentry_dsn,
  enabled: config.env !== 'development',
  environment: config.env,
});

const App = () => {
  const client = RemoteClient.getInstance();

  return (
    <PaperProvider>
      <AppNetworkProvider>
        <ApolloProvider client={client}>
          <I18nextProvider i18n={i18nInstance}>
            <Navigation />
          </I18nextProvider>
        </ApolloProvider>
      </AppNetworkProvider>
    </PaperProvider>
  );
};

export default Sentry.wrap(App);
