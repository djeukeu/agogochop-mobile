import { InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);
export const userVar = makeVar(null);

export const getCache = () => {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
          user: {
            read() {
              return userVar();
            },
          },
        },
      },
    },
  });

  return cache;
};
