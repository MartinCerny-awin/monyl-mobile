import 'intl';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { StyleProvider, Text } from 'native-base';

import { IntlProvider } from 'react-intl-redux';
import 'intl/locale-data/jsonp/en';

import RootComponent from './src/RootComponent';
import configureStore from './src/boot/configureStore';
import getTheme from './src/theme/components';
import variables from './src/theme/variables/commonColor';

const language = 'en';

const { store, persistor } = configureStore();
const App = () => (
  <StyleProvider style={getTheme(variables)}>
    <Provider store={store}>
      <IntlProvider locale={language} textComponent={Text}>
        <PersistGate loading={null} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </IntlProvider>
    </Provider>
  </StyleProvider>
);

export default App;
