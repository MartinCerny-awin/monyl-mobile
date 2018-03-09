import { reducer as formReducer } from 'redux-form';

import homeReducer from '../screens/Home/reducer';

export default {
  form: formReducer,
  homeReducer,
};
