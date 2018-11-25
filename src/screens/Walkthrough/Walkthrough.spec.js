import React from 'react';
import { shallow } from 'enzyme';
import { Button, Toast } from 'native-base';
import { Platform } from 'react-native';

import Walkthrough from './index';

Toast.show = jest.fn();

const navigate = jest.fn();
const navigation = {
  navigate,
};
const dispatch = jest.fn();

describe('SignUp Screen', () => {
  beforeEach(() => {
    dispatch.mockClear();
    navigate.mockClear();
  });

  afterEach(() => {
    Platform.OS = 'ios';
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Walkthrough navigation={navigation} />);

    expect(wrapper).toHaveLength(1);
  });

  it('navigates to Drawer when first button clicked', () => {
    const wrapper = shallow(<Walkthrough navigation={navigation} valid />).shallow();

    const button = wrapper.find(Button).at(0);
    button.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Drawer');
  });

  it('navigates to Drawer when second button clicked', () => {
    const wrapper = shallow(<Walkthrough navigation={navigation} valid />).shallow();
    const button1 = wrapper.find(Button).at(1);
    button1.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Drawer');
  });

  it('navigates to Drawer when third button clicked', () => {
    const wrapper = shallow(<Walkthrough navigation={navigation} valid />).shallow();
    const button2 = wrapper.find(Button).at(2);
    button2.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Drawer');
  });

  it('sets correct size for android', () => {
    Platform.OS = 'android';

    const wrapper = shallow(<Walkthrough navigation={navigation} />);

    expect(wrapper).toHaveLength(1);
  });
});
