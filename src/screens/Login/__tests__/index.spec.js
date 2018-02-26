import React from 'react';
import { shallow } from 'enzyme';

// import createComponentWithIntl from '../../../utils/tests/createComponentWithIntl';
import Login from '../Login';
import ActionSheetPicker from '../../../components/ActionSheetPicker';

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

  it('navigates to walkthrough', () => {
    const wrapper = shallow(<Login navigation={navigation} />);

    const skipButton = wrapper.find({ jest: 'skip' });
    skipButton.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Walkthrough');
  });
});
