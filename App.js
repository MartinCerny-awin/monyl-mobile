import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { StyleProvider, Text } from 'native-base';
import { I18nProvider } from '@lingui/react';

import i18n from './src/utils/i18n';
import RootComponent from './src/RootComponent';
import configureStore from './src/boot/configureStore';
import getTheme from './src/theme/components';
import variables from './src/theme/variables/commonColor';

const { store, persistor } = configureStore();
const App = () => (
  <StyleProvider style={getTheme(variables)}>
    <Provider store={store}>
      <I18nProvider i18n={i18n} defaultRender={({ translation }) => <Text>{translation}</Text>}>
        <PersistGate loading={null} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </I18nProvider>
    </Provider>
  </StyleProvider>
);

export default App;
