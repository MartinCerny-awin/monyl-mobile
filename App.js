import 'intl';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { StyleProvider } from 'native-base';

import RootComponent from './src/RootComponent';
import configureStore from './src/boot/configureStore';
import getTheme from './src/theme/components';
import variables from './src/theme/variables/commonColor';

const { store, persistor } = configureStore();
const App = () => (
  <StyleProvider style={getTheme(variables)}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  </StyleProvider>
);

export default App;
