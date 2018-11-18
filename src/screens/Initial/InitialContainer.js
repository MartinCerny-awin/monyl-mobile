// @flow
import { connect } from 'react-redux';

import Initial from './Initial';

const mapStateToProps = (appState) => {
  const { currentLocale } = appState.locales;
  return {
    currentLocale,
  };
};

export default connect(mapStateToProps)(Initial);
