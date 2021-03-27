// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Root, StyleProvider, Text } from 'native-base';
import { I18nProvider } from '@lingui/react';

import Navigator from './src/screens/Navigator';
import i18n from './src/utils/i18n';
import configureStore from './src/boot/configureStore';
import getTheme from './src/theme/components';
import variables from './src/theme/variables/commonColor';

const { store, persistor } = configureStore();
const App = () => (
  <StyleProvider style={getTheme(variables)}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* $FlowFixMe language is passed inside i18n */}
        <I18nProvider i18n={i18n} defaultRender={({ translation }) => <Text>{translation}</Text>}>
          <Root>
            <Navigator />
          </Root>
        </I18nProvider>
      </PersistGate>
    </Provider>
  </StyleProvider>
);

export default App;
