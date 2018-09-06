import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import { Title, Button } from 'native-base';

import HeaderBack from './HeaderBack';

const goBack = jest.fn();
const navigation = {
  goBack,
};

describe('HeaderBack Component', () => {
  it('renders correctly default title', () => {
    const wrapper = shallowWithIntl(<HeaderBack />);

    expect(wrapper.find(Title).props().children).toBe('');
  });

  it('renders correctly title', () => {
    const wrapper = shallowWithIntl(<HeaderBack title="Hello" />);

    expect(wrapper.find(Title).props().children).toBe('Hello');
  });

  it('calls action when the button is pressed', () => {
    const wrapper = shallowWithIntl(<HeaderBack navigation={navigation} />);

    const button = wrapper.find(Button);
    button.simulate('press');

    expect(goBack).toHaveBeenCalled();
  });
});
