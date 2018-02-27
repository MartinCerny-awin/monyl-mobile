// @flow
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';

import Initial from './Initial';

const mapStateToProps: MapStateToProps<*, *, *> = appState => ({
  currentLocale: appState.locales.locale,
});

export default connect(mapStateToProps, null, null, { pure: false })(Initial);
