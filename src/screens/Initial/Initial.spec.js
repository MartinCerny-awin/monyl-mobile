import React from 'react';
import { shallow } from 'enzyme';

import i18n from '../../utils/i18n';
import ActionSheetPicker from '../../components/ActionSheetPicker';

const activate = jest.spyOn(i18n, 'activate');

const Initial = require('./Initial').default;

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

  it.only('changes language', () => {
    const wrapper = shallow(<Initial dispatch={dispatch} currentLocale="en" />);

    wrapper.find(ActionSheetPicker).simulate('change', 'cs');

    expect(activate).toHaveBeenCalled();
    expect(dispatch).toBeCalledWith(
      expect.objectContaining({
        type: 'UPDATE_LANGUAGE',
        payload: {
          currentLocale: 'cs',
        },
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
