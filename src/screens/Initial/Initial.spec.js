import React from 'react';
import { shallow } from 'enzyme';

import i18n from '../../utils/i18n';
import ActionSheetPicker from '../../components/ActionSheetPicker';
import configureStore from '../../boot/configureStore';

const activate = jest.spyOn(i18n, 'activate');

const Initial = require('./index').default;

const navigate = jest.fn();
const navigation = {
  navigate,
};
let dispatch;
let store;

describe('Initial Screen', () => {
  beforeAll(() => {
    ({ store } = configureStore({ locales: { currentLocale: 'en' } }));
    dispatch = jest.spyOn(store, 'dispatch');
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Initial store={store} />).shallow();

    expect(wrapper).toHaveLength(1);
  });

  it('changes language', () => {
    const wrapper = shallow(<Initial store={store} navigation={navigation} />).shallow();

    wrapper.find(ActionSheetPicker).simulate('change', 'cs');

    expect(activate).toHaveBeenCalled();
    expect(dispatch).toBeCalledWith(
      expect.objectContaining({
        type: 'UPDATE_LANGUAGE',
        payload: {
          currentLocale: 'cs',
        },
      }),
    );
  });

  it('navigates to sign up', () => {
    const wrapper = shallow(<Initial store={store} navigation={navigation} />).shallow();

    const skipButton = wrapper.find({ jest: 'signUp' });
    skipButton.simulate('press');

    expect(navigate).toHaveBeenCalledWith('SignUp');
  });

  it('navigates to forgot password', () => {
    const wrapper = shallow(<Initial store={store} navigation={navigation} />).shallow();

    const skipButton = wrapper.find({ jest: 'login' });
    skipButton.simulate('press');

    expect(navigate).toHaveBeenCalledWith('Login');
  });
});
