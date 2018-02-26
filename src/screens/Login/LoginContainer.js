// @flow
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import { reduxForm } from 'redux-form';

import Login from './Login';

const mapStateToProps: MapStateToProps<*, *, *> = appState => ({
  currentLocale: appState.locales.locale,
});

export default connect(mapStateToProps, null, null, { pure: false })(
  reduxForm({
    form: 'login',
  })(Login),
);
