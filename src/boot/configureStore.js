// @flow
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);

export default function configureStore(): any {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: 'flatapp',
      realtime: true,
    }),
  );

  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  return { store, persistor };
}
