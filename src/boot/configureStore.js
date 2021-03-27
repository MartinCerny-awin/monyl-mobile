// @flow

import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import thunk from 'redux-thunk';

import type { StoreFlowType } from '../reducers/index';

import reducers from '../reducers';

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);

export default function configureStore(preloadedState: StoreFlowType = {}): any {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: 'karel',
      realtime: true,
    }),
  );

  // $FlowFixMe https://github.com/rt2zz/redux-persist/issues/780
  const store = createStore(persistedReducer, preloadedState, enhancer);
  const persistor = persistStore(store);
  // persistor.purge();

  return { store, persistor };
}
