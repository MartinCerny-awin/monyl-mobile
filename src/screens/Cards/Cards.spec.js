import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithIntl } from 'enzyme-react-intl';

import data from './data';

import Cards from './Cards';

const openDrawer = jest.fn();
const navigation = {
  openDrawer,
};
const dispatch = jest.fn();

describe('Login Screen', () => {
  beforeAll(() => {
    dispatch.mockClear();
  });

  it('renders correctly', () => {
    const wrapper = shallowWithIntl(<Cards navigation={navigation} />);

    expect(wrapper).toHaveLength(1);
  });

  it('renders deck swipper', () => {
    const wrapper = shallowWithIntl(<Cards navigation={navigation} />).shallow();
    const deckSwiper = wrapper.find('Styled(DeckSwiper)');
    const innerWrapper = shallow(deckSwiper.prop('renderItem')(data[0]));
    const defaultSource = innerWrapper.find('Styled(Thumbnail)').prop('source');

    expect(defaultSource).toEqual({ testUri: '../../../assets/photos/scene.jpg' });
  });
});
