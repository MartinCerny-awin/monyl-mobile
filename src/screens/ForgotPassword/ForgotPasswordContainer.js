// @flow
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

import ForgotPassword from './ForgotPassword';

export default injectIntl(
  reduxForm({
    form: 'forgotPassword',
  })(ForgotPassword),
);
