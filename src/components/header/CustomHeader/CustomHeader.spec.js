import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'native-base';

import CustomHeader from './index';

const openDrawer = jest.fn();
const navigation = {
  openDrawer,
};

let wrapper;
describe('CustomHeader (Component)', () => {
  beforeEach(() => {
    wrapper = shallow(<CustomHeader navigation={navigation} />);
  });

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('opens drawer', () => {
    const button = wrapper.find(Button);
    button.simulate('press');

    expect(openDrawer).toHaveBeenCalled();
  });
});
