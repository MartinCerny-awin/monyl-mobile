// @flow

import { reduxForm } from 'redux-form';

import SignUp from './SignUp';

export default reduxForm({ form: 'signUp' })(SignUp);
