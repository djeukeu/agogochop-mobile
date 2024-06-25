import React from 'react';
import * as Sentry from '@sentry/react-native';
import { View, Text } from 'react-native';
import config from './src/config';

Sentry.init({
  dsn: config.sentry_dsn,
  enabled: config.env !== 'development',
  environment: config.env,
});

const App = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>AgogoChop: {config.env}</Text>
    </View>
  );
};

export default Sentry.wrap(App);
