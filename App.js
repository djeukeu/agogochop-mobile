import React from 'react';
import * as Sentry from '@sentry/react-native';
import { PaperProvider } from 'react-native-paper';
import config from './src/config';
import AppNetworkProvider from './src/Contexts/AppNetworkProvider';
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
        <Navigation />
      </AppNetworkProvider>
    </PaperProvider>
  );
};

export default Sentry.wrap(App);
