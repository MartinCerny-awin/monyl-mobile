// @flow
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

import SignUp from './SignUp';

export default injectIntl(
  reduxForm({
    form: 'signUp',
  })(SignUp),
);
