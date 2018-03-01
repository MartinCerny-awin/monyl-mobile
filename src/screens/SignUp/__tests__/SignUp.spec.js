import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';

import SignUp from '../SignUp';

jest.mock('native-base');
const { Toast } = require('native-base');

Toast.show = jest.fn();

const goBack = jest.fn();
const navigation = {
  goBack,
};
const dispatch = jest.fn();

describe('SignUp Screen', () => {
  beforeAll(() => {
    dispatch.mockClear();
  });

  it('renders correctly', () => {
    const wrapper = shallowWithIntl(<SignUp />);

    expect(wrapper).toHaveLength(1);
  });

  it('shows tooltip error when wrong SignUp details are entered', () => {
    const wrapper = shallowWithIntl(<SignUp />);

    const button = wrapper.find({ jest: 'signUp' });
    button.simulate('press');

    expect(Toast.show).toHaveBeenCalled();
  });

  it('navigates back when the form is valid', () => {
    const wrapper = shallowWithIntl(<SignUp navigation={navigation} valid />);

    const button = wrapper.find({ jest: 'signUp' });
    button.simulate('press');

    expect(goBack).toHaveBeenCalled();
  });
});
