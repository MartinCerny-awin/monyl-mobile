import React from 'react';
import { shallow } from 'enzyme';

import data from './data';

import Home from './Home';

const openDrawer = jest.fn();
const navigation = {
  openDrawer,
};
const dispatch = jest.fn();

describe('Home (Screen)', () => {
  beforeAll(() => {
    dispatch.mockClear();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Home navigation={navigation} />);

    expect(wrapper).toHaveLength(1);
  });

  it('renders deck swipper', () => {
    const wrapper = shallow(<Home navigation={navigation} />).shallow();
    const deckSwiper = wrapper.find('Styled(DeckSwiper)');
    const innerWrapper = shallow(deckSwiper.prop('renderItem')(data[0]));
    const defaultSource = innerWrapper.find('Styled(Thumbnail)').prop('source');

    expect(defaultSource).toEqual({ testUri: '../../../assets/photos/scene.jpg' });
  });

  it('swipes', () => {
    const wrapper = shallow(<Home navigation={navigation} />);
    const instance = wrapper.instance();
    const swipeLeft = jest.fn();
    const swipeRight = jest.fn();
    instance.customDeckSwiper = {
      _root: {
        swipeLeft,
        swipeRight,
      },
    };
    const swipeLeftButton = wrapper.shallow().find('Styled(Button)').at(0);
    swipeLeftButton.simulate('press');
    expect(swipeLeft).toBeCalled();

    expect(swipeRight).not.toBeCalled();
    const swipeRightButton = wrapper.shallow().find('Styled(Button)').at(1);
    swipeRightButton.simulate('press');
    expect(swipeRight).toBeCalled();
  });
});
