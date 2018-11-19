// @flow

import { connect } from 'react-redux';

import type { StoreFlowType } from '../../reducers';

import Initial from './Initial';

const mapStateToProps = (appState: StoreFlowType) => {
  const { currentLocale } = appState.locales;
  return {
    currentLocale,
  };
};

// https://github.com/flow-typed/flow-typed/issues/2553
export default connect(mapStateToProps)(Initial);
