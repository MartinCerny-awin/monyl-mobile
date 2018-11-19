// @flow

import { reduxForm } from 'redux-form';

import ForgotPassword from './ForgotPassword';

export default reduxForm({ form: 'forgotPassword' })(ForgotPassword);
