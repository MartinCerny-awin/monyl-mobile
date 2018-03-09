import React from 'react';
import { shallow } from 'enzyme';
import I18n from 'react-native-i18n';

import Initial from '../Initial';
import ActionSheetPicker from '../../../components/ActionSheetPicker';

jest.mock('native-base');
const { Toast } = require('native-base');

Toast.show = jest.fn();

const navigate = jest.fn();
const navigation = {
  navigate,
};
const dispatch = jest.fn();

describe('Initial Screen', () => {
  beforeAll(() => {
    dispatch.mockClear();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Initial />);

    expect(wrapper).toHaveLength(1);
  });

  it('changes locale', () => {
    const wrapper = shallow(<Initial dispatch={dispatch} />);

    wrapper.find(ActionSheetPicker).simulate('change', 'cs');

    expect(I18n.locale).toBe('cs');
  });

  it('navigates to sign up', () => {
    const wrapper = shallow(<Initial navigation={navigation} />);

    const skipButton = wrapper.find({ jest: 'signUp' });
    skipButton.simulate('press');

    expect(navigate).toHaveBeenCalledWith('SignUp');
  });

  it('navigates to forgot password', () => {
    const wrapper = shallow(<Initial navigation={navigation} />);

    const skipButton = wrapper.find({ jest: 'login' });
    skipButton.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Login');
  });
});
