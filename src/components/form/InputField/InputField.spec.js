import React from 'react';
import { Icon } from 'native-base';
import { shallow } from 'enzyme';
import styles from './styles';

import InputField from './InputField';

describe('InputField Component', () => {
  it('renders without icon', () => {
    const meta = { touched: false, error: 'Big Error' };
    const wrapper = shallow(<InputField meta={meta} />);
    const iconWrapper = wrapper.find(Icon);

    expect(wrapper).toHaveLength(1);
    expect(iconWrapper).toHaveLength(0);
  });

  it('renders icon', () => {
    const meta = { touched: true, error: '' };
    const icon = 'bigBigBigIcon';

    const wrapper = shallow(<InputField meta={meta} icon={icon} />);
    const iconWrapper = wrapper.find(Icon);

    expect(iconWrapper).toHaveLength(1);
  });

  it('renders without errors when not touched', () => {
    const meta = { touched: false, error: 'Big Error' };

    const wrapper = shallow(<InputField meta={meta} />);

    const errorMessage = wrapper.find({ style: styles.error });

    expect(wrapper).toHaveLength(1);
    expect(errorMessage.prop('children')).toBe('');
  });


  it('renders without errors when touched', () => {
    const meta = { touched: true, error: '' };

    const wrapper = shallow(<InputField meta={meta} />);

    const errorMessage = wrapper.find({ style: styles.error });

    expect(wrapper).toHaveLength(1);
    expect(errorMessage.prop('children')).toBe('');
  });

  it('renders errors when touched', () => {
    const meta = { touched: true, error: 'Big Error' };

    const wrapper = shallow(<InputField meta={meta} />);

    const errorMessage = wrapper.find({ style: styles.error });

    expect(wrapper).toHaveLength(1);
    expect(errorMessage.prop('children')).toBe('Big Error');
  });
});
