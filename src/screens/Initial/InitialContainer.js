// @flow
import { connect } from 'react-redux';

import Initial from './Initial';

const mapStateToProps = appState => ({
  currentLocale: appState.locales.locale,
});

export default connect(mapStateToProps, null, null, { pure: false })(Initial);
