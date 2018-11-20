import React from 'react';
import { shallow } from 'enzyme';
import { Button, Toast } from 'native-base';

import SignUp from './SignUp';

Toast.show = jest.fn();

const navigate = jest.fn();
const navigation = {
  navigate,
};
const dispatch = jest.fn();

describe('SignUp Screen', () => {
  beforeAll(() => {
    dispatch.mockClear();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<SignUp />);

    expect(wrapper).toHaveLength(1);
  });

  it('shows tooltip error when wrong SignUp details are entered', () => {
    const wrapper = shallow(<SignUp navigation={navigation} valid={false} />);

    const button = wrapper.find(Button);
    button.simulate('press');

    expect(Toast.show).toHaveBeenCalled();
  });

  it('navigates to Walkthrough when the form is valid', () => {
    const wrapper = shallow(<SignUp navigation={navigation} valid />);

    const button = wrapper.find(Button);
    button.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Walkthrough');
  });
});
