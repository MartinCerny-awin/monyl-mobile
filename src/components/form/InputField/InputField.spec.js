import React from 'react';
import { Icon } from 'native-base';
import { shallow } from 'enzyme';

import InputField from './InputField';

describe('InputField Component', () => {
  it('renders without errors when not touched and without icon', () => {
    const meta = { touched: false, error: '' };

    const wrapper = shallow(<InputField meta={meta} />);

    const message = wrapper.find({ jest: 'errorMessage' });
    const iconWrapper = wrapper.find(Icon);

    expect(wrapper).toHaveLength(1);
    expect(message).toHaveLength(0);
    expect(iconWrapper).toHaveLength(0);
  });

  it('renders without errors when touched', () => {
    const meta = { touched: true, error: '' };

    const wrapper = shallow(<InputField meta={meta} />);

    const message = wrapper.find({ jest: 'errorMessage' });

    expect(wrapper).toHaveLength(1);
    expect(message).toHaveLength(0);
  });

  it('renders errors when touched', () => {
    const meta = { touched: true, error: 'Big Error' };

    const wrapper = shallow(<InputField meta={meta} />);

    const message = wrapper.find({ jest: 'errorMessage' });

    expect(wrapper).toHaveLength(1);
    expect(message).toHaveLength(1);
  });

  it('renders correctly icon', () => {
    const meta = { touched: true, error: '' };
    const icon = 'bigBigBigIcon';

    const wrapper = shallow(<InputField meta={meta} icon={icon} />);
    const iconWrapper = wrapper.find(Icon);

    expect(iconWrapper).toHaveLength(1);
  });
});
