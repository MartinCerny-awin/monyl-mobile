import React from 'react';
import { shallow } from 'enzyme';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { t } from '@lingui/macro';

import i18n from '../../utils/i18n';

const showActionSheetWithOptions = jest.fn();
jest.mock(
  'react-native', () => ({
    ActionSheetIOS: {
      showActionSheetWithOptions,
    },
    StyleSheet,
    Text,
    View,
  }),
);

const ActionSheetPicker = require('./ActionSheetPicker.ios').default;

const onChange = jest.fn();
const initProps = {
  currentOption: 'cs',
  options: { cs: 'Cestina', en: 'English' },
  onChange,
};

let wrapper;
describe('ActionSheetPicker (Component)', () => {
  beforeEach(() => {
    wrapper = shallow(<ActionSheetPicker {...initProps} />);
  });

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('changes selected option', () => {
    const button = wrapper.find(Text);
    button.simulate('press');

    expect(showActionSheetWithOptions)
      .toHaveBeenCalledWith(
        { cancelButtonIndex: 2, options: ['Cestina', 'English', i18n._(t`Cancel`)] },
        expect.any(Function),
      );
  });
});
