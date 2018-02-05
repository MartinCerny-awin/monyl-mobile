import { reducer as formReducer } from 'redux-form';

import localesReducer from './localesReducer';
import homeReducer from '../screens/Home/reducer';

export default {
  form: formReducer,
  locales: localesReducer,
  homeReducer,
};
