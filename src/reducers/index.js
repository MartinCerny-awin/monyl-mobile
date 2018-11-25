// @flow

import { reducer as formReducer } from 'redux-form';

import type { LocalesStoreFlowType } from './localesReducer';
import localesReducer from './localesReducer';

export type StoreFlowType = $Shape<{|
  locales: LocalesStoreFlowType
|}>;

export default {
  form: formReducer,
  locales: localesReducer,
};
