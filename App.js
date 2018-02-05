import 'intl';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { StyleProvider, Text } from 'native-base';

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import cs from 'react-intl/locale-data/cs';

import ConnectedIntlProvider from './src/redux/ConnectedIntlProvider';
import RootComponent from './src/RootComponent';
import configureStore from './src/boot/configureStore';
import getTheme from './src/theme/components';
import variables from './src/theme/variables/commonColor';

addLocaleData([...en, ...cs]);

const { store, persistor } = configureStore();
const App = () => (
  <StyleProvider style={getTheme(variables)}>
    <Provider store={store}>
      <ConnectedIntlProvider textComponent={Text}>
        <PersistGate loading={null} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </ConnectedIntlProvider>
    </Provider>
  </StyleProvider>
);

export default App;
