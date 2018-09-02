import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Channels from '../index';

const navigation = {};

describe('Channels', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Channels navigation />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
