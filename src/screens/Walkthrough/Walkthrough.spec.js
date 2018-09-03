import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import { Button, Toast } from 'native-base';

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

  it('renders correctly', () => {
    const wrapper = shallowWithIntl(<Walkthrough navigation={navigation} />);

    expect(wrapper).toHaveLength(1);
  });

  it('navigates to Drawer when first button clicked', () => {
    const wrapper = shallowWithIntl(<Walkthrough navigation={navigation} valid />);

    const button = wrapper.find(Button).at(0);
    button.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Drawer');
  });

  it('navigates to Drawer when second button clicked', () => {
    const wrapper = shallowWithIntl(<Walkthrough navigation={navigation} valid />);
    const button1 = wrapper.find(Button).at(1);
    button1.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Drawer');
  });

  it('navigates to Drawer when third button clicked', () => {
    const wrapper = shallowWithIntl(<Walkthrough navigation={navigation} valid />);
    const button2 = wrapper.find(Button).at(2);
    button2.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Drawer');
  });
});
