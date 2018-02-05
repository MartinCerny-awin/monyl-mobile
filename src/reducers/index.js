import { reducer as formReducer } from 'redux-form';
import { intlReducer } from 'react-intl-redux';

import localesReducer from './localesReducer';
import homeReducer from '../screens/Home/reducer';

export default {
  form: formReducer,
  intl: intlReducer,
  locales: localesReducer,
  homeReducer,
};
