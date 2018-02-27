import React from 'react';
import { shallow } from 'enzyme';

import Login from '../Login';
import ActionSheetPicker from '../../../components/ActionSheetPicker';

jest.mock('native-base');
const { Toast } = require('native-base');

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
    const wrapper = shallow(<Login />);

    expect(wrapper).toHaveLength(1);
  });

  it('shows tooltip error when wrong login details are entered', () => {
    const wrapper = shallow(<Login />);

    const skipButton = wrapper.find({ jest: 'login' });
    skipButton.simulate('press');

    expect(Toast.show).toHaveBeenCalled();
  });

  it('navigates to home when form is valid', () => {
    const wrapper = shallow(<Login navigation={navigation} valid />);

    const skipButton = wrapper.find({ jest: 'login' });
    skipButton.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Home');
  });

  it('changes locale', () => {
    const wrapper = shallow(<Login dispatch={dispatch} currentLocale="en" />);

    wrapper.find(ActionSheetPicker).simulate('change', { target: { value: 'cs' } });
    expect(dispatch).toBeCalledWith(
      expect.objectContaining({
        type: 'UPDATE_LOCALE',
      }),
    );
  });

  it('navigates to sign up', () => {
    const wrapper = shallow(<Login navigation={navigation} />);

    const skipButton = wrapper.find({ jest: 'signUp' });
    skipButton.simulate('press');

    expect(navigate).toHaveBeenCalledWith('SignUp');
  });

  it('navigates to forgot password', () => {
    const wrapper = shallow(<Login navigation={navigation} />);

    const skipButton = wrapper.find({ jest: 'forgotPassword' });
    skipButton.simulate('press');

    expect(navigate).toHaveBeenCalledWith('ForgotPassword');
  });
});
