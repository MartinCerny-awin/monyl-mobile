module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-iphone-x-helper|lottie-react-native|expo|react-native-maps|react-native-svg|react-native-branch|native-base-shoutem-theme|react-native-easy-grid|react-native-drawer|react-native-carousel-view|react-native-vector-icons|react-native-keyboard-aware-scroll-view|react-native-swiper|react-navigation|react-navigation-drawer|react-navigation-stack|native-base|@expo|react-native-scrollable-tab-view|react-native-simple-modal)/)',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/theme/**',
    '!src/locales/**',
    '!src/**/styles.js',
    '!src/**/types.js',
  ],
  setupFiles: [
    '<rootDir>/jest/setup.js',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
};
