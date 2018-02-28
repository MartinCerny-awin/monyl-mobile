// @flow
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

import Login from './Login';

export default injectIntl(
  reduxForm({
    form: 'login',
  })(Login),
);
