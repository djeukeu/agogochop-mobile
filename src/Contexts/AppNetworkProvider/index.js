import React from 'react';
import { NetworkProvider } from 'react-native-offline';

const AppNetworkProvider = (props) => {
  return (
    <NetworkProvider
      pingTimeout={5000}
      shouldPing={false}
      pingInterval={30000}
      pingOnlyIfOffline={true}>
      {props.children}
    </NetworkProvider>
  );
};

export default AppNetworkProvider;
