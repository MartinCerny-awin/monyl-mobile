import React from 'react';
import { shallow } from 'enzyme';
import { ListItem } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';

import SideBar from './index';

const navigate = jest.fn();
const dispatch = jest.fn();
const navigation = {
  navigate,
  dispatch,
};

let wrapper;
describe('SideBar (Component)', () => {
  beforeEach(() => {
    wrapper = shallow(<SideBar navigation={navigation} />);
  });

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('navigates to home', () => {
    const listItem0 = wrapper.find(ListItem).at(0);
    listItem0.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Home');
  });

  it('', () => {
    const listItem1 = wrapper.find(ListItem).at(1);
    listItem1.simulate('press');

    expect(dispatch).toHaveBeenCalledWith({
      actions: [{ routeName: 'Login', type: NavigationActions.NAVIGATE }], index: 0, key: null, type: StackActions.RESET,
    });
  });
});
