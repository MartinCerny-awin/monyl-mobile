import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import { Toast } from 'native-base';

import Login from './Login';

Toast.show = jest.fn();

const navigate = jest.fn();
const navigation = {
  navigate,
};
const dispatch = jest.fn();

describe('Login Screen', () => {
  beforeAll(() => {
    dispatch.mockClear();
  });

  it('renders correctly', () => {
    const wrapper = shallowWithIntl(<Login />);

    expect(wrapper).toHaveLength(1);
  });

  it('shows tooltip error when wrong login details are entered', () => {
    const wrapper = shallowWithIntl(<Login />);

    const button = wrapper.find({ jest: 'login' });
    button.simulate('press');

    expect(Toast.show).toHaveBeenCalled();
  });

  it('navigates to channels when form is valid', () => {
    const wrapper = shallowWithIntl(<Login navigation={navigation} valid />);

    const button = wrapper.find({ jest: 'login' });
    button.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Channels');
  });

  it('navigates to sign up', () => {
    const wrapper = shallowWithIntl(<Login navigation={navigation} />);

    const button = wrapper.find({ jest: 'signUp' });
    button.simulate('press');

    expect(navigate).toHaveBeenCalledWith('SignUp');
  });

  it('navigates to forgot password', () => {
    const wrapper = shallowWithIntl(<Login navigation={navigation} />);

    const button = wrapper.find({ jest: 'forgotPassword' });
    button.simulate('press');

    expect(navigate).toHaveBeenCalledWith('ForgotPassword');
  });
});
