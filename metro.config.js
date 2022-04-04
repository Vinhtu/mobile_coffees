/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: {
      ...require('node-libs-react-native'),
      net: require.resolve("react-native-tcp-socket"),
      console: require.resolve('node-libs-react-native/mock/console'),
      buffer: require.resolve('node-libs-react-native/mock/buffer'),
    },
  },
};
