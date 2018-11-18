import React from 'react';
import { shallow } from 'enzyme';
import { Title, Button } from 'native-base';

import HeaderBack from './HeaderBack';

const goBack = jest.fn();
const navigation = {
  goBack,
};

describe('HeaderBack Component', () => {
  it('renders correctly default title', () => {
    const wrapper = shallow(<HeaderBack />);

    expect(wrapper.find(Title).props().children).toBe('');
  });

  it('renders correctly title', () => {
    const wrapper = shallow(<HeaderBack title="Hello" />);

    expect(wrapper.find(Title).props().children).toBe('Hello');
  });

  it('calls action when the button is pressed', () => {
    const wrapper = shallow(<HeaderBack navigation={navigation} />);

    const button = wrapper.find(Button);
    button.simulate('press');

    expect(goBack).toHaveBeenCalled();
  });
});
