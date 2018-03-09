import React from 'react';
import { shallow } from 'enzyme';

import ForgotPassword from '../ForgotPassword';

jest.mock('native-base');
const { Toast } = require('native-base');

Toast.show = jest.fn();

const goBack = jest.fn();
const navigation = {
  goBack,
};
const dispatch = jest.fn();

describe('ForgotPassword Screen', () => {
  beforeAll(() => {
    dispatch.mockClear();
  });
  it('renders correctly', () => {
    const wrapper = shallow(<ForgotPassword />);

    expect(wrapper).toHaveLength(1);
  });

  it('shows tooltip error when wrong ForgotPassword details are entered', () => {
    const wrapper = shallow(<ForgotPassword />);

    const button = wrapper.find({ jest: 'sendEmail' });
    button.simulate('press');

    expect(Toast.show).toHaveBeenCalled();
  });

  it('navigates to home when form is valid', () => {
    const wrapper = shallow(<ForgotPassword navigation={navigation} valid />);

    const skipButton = wrapper.find({ jest: 'sendEmail' });
    skipButton.simulate('press');

    expect(goBack).toHaveBeenCalled();
  });
});
