import { reducer as formReducer } from 'redux-form';

import localesReducer from './localesReducer';

export default {
  form: formReducer,
  locales: localesReducer,
};
