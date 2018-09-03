import React from 'react';
import { shallow } from 'enzyme';

import Initial from './Initial';
import ActionSheetPicker from '../../components/ActionSheetPicker';

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
    const wrapper = shallow(<Initial dispatch={dispatch} currentLocale="en" />);

    wrapper.find(ActionSheetPicker).simulate('change', { target: { value: 'cs' } });
    expect(dispatch).toBeCalledWith(
      expect.objectContaining({
        type: 'UPDATE_LOCALE',
      }),
    );
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
