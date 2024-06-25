const {
  withSentryConfig
} = require("@sentry/react-native/metro");

module.exports = withSentryConfig({
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
});