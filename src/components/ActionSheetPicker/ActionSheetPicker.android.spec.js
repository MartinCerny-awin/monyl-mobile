import React from 'react';
import { shallow } from 'enzyme';
import { Picker } from 'react-native';

const ActionSheetPicker = require('./ActionSheetPicker.android').default;

const onChange = jest.fn();
const initProps = {
  currentOption: 'cs',
  options: { cs: 'Cestina', en: 'English' },
  onChange,
};

let wrapper;
describe('ActionSheetPicker (Component)', () => {
  beforeEach(() => {
    wrapper = shallow(<ActionSheetPicker {...initProps} />);
  });

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('changes selected option', () => {
    const button = wrapper.find(Picker);
    const valueChangeEvent = { target: { value: 'en', index: 1 } };
    button.simulate('ValueChange', valueChangeEvent);

    expect(onChange).toHaveBeenCalledWith({ target: { index: 1, value: 'en' } });
  });
});
