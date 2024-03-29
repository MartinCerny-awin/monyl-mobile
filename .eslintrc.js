module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },

  "plugins": ["flowtype", "react", "json", "jest"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".android.js", ".ios.js"]
      }
    }
  },

  // Map from global var to bool specifying if it can be redefined
  "globals": {
    "__DEV__": true,
    "__dirname": false,
    "__fbBatchedBridgeConfig": false,
    "alert": false,
    "cancelAnimationFrame": false,
    "cancelIdleCallback": false,
    "clearImmediate": true,
    "clearInterval": false,
    "clearTimeout": false,
    "console": false,
    "document": false,
    "escape": false,
    "Event": false,
    "EventTarget": false,
    "exports": false,
    "fetch": false,
    "FormData": false,
    "global": false,
    "jest": false,
    "Map": true,
    "module": false,
    "navigator": false,
    "process": false,
    "Promise": true,
    "requestAnimationFrame": true,
    "requestIdleCallback": true,
    "require": false,
    "Set": true,
    "setImmediate": true,
    "setInterval": false,
    "setTimeout": false,
    "window": false,
    "XMLHttpRequest": false,
    "pit": false
  },

  "rules": {
    // React Native has JSX in JS files
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    // React Native includes images via require('../images/example.png')
    "global-require": 0,
    "no-mixed-operators": 0,
    "no-use-before-define": 0,
    "function-paren-newline": 0,
    "import/no-extraneous-dependencies": 0,
    "react/destructuring-assignment": 0,
    "no-nested-ternary": 0,
    "import/prefer-default-export": 0,
    // https://github.com/facebook/react-native/issues/10991
    "react/prefer-stateless-function": 0,
  }
}
