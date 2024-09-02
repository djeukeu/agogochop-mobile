import { ApolloClient, from, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { SentryLink } from 'apollo-link-sentry';
import { createUploadLink } from 'apollo-upload-client';
import { getCache, isLoggedInVar, userVar } from './cache';
import config from '../config';
import { getToken, clearToken } from '../utils/token';
import { getAuthData } from '../utils/user';

const cache = getCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  graphQLErrors?.forEach(async ({ message }) => {
    if (message === 'USER_BANNED') {
      await clearToken();
      isLoggedInVar(false);
    }
  });
  if (config.env !== 'production') {
    if (graphQLErrors)
      if (networkError) console.log(`[Network error]: ${networkError}`);
  }
});

const withToken = setContext(async () => {
  const token = await getToken();
  if (token) {
    return { token };
  }
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const userToken = operation.getContext().token;

  if (userToken) {
    operation.setContext(() => ({
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    }));
  }
  return forward(operation);
});

const RemoteClient = (function () {
  let instance;
  const initCacheStore = async (isConnected) => {
    const userToken = await getToken();
    if (userToken) {
      const userData = await getAuthData();
      isLoggedInVar(true);
      userVar(userData);
    } else {
      await clearToken();
      isLoggedInVar(false);
    }
  };

  const createInstance = () => {
    const link = from([
      errorLink,
      withToken,
      authMiddleware,
      new SentryLink(),
      new createUploadLink({
        uri: config.api_url + '/graphql',
      }),
    ]);
    const client = new ApolloClient({
      link,
      cache: cache,
    });
    return client;
  };
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
    initCacheStore,
  };
})();

export { RemoteClient };
