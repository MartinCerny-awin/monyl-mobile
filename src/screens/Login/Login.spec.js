import React from 'react';
import { shallow } from 'enzyme';
import { Toast } from 'native-base';

import Login from './Login';

Toast.show = jest.fn();

const navigate = jest.fn();
const navigation = {
  navigate,
};

describe('Login Screen', () => {
  beforeEach(() => {
    navigate.mockClear();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toHaveLength(1);
  });

  it('shows tooltip error when wrong login details are entered', () => {
    const wrapper = shallow(<Login />);

    const button = wrapper.find({ jest: 'login' });
    button.simulate('press');

    expect(Toast.show).toHaveBeenCalled();
  });

  it('navigates to Home when form is valid', () => {
    const wrapper = shallow(<Login navigation={navigation} valid />);

    const button = wrapper.find({ jest: 'login' });
    button.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Home');
  });

  it('navigates to sign up', () => {
    const wrapper = shallow(<Login navigation={navigation} />);

    const button = wrapper.find({ jest: 'signUp' });
    button.simulate('press');

    expect(navigate).toHaveBeenCalledWith('SignUp');
  });

  it('navigates to forgot password', () => {
    const wrapper = shallow(<Login navigation={navigation} />);

    const button = wrapper.find({ jest: 'forgotPassword' });
    button.simulate('press');

    expect(navigate).toHaveBeenCalledWith('ForgotPassword');
  });
});
