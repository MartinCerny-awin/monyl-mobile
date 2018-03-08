import en from '../../i18n/locales/en.json';
import cs from '../../i18n/locales/cs.json';
import I18n from '../i18n/i18n'

const UPDATE_LOCALE = 'UPDATE_LOCALE';

export const updateLocale = locale => ({
  type: UPDATE_LOCALE,
  payload: {
    locale,
  },
});

const englishState = {
  locale: 'en',
  messages: {
    ...en,
  },
};

const czechState = {
  locale: 'cs',
  messages: {
    ...cs,
  },
};

export default (state = null, action: Function) => {
  if(!state) {
    if (I18n.locale === 'cs-CZ') {
      state = czechState;
    } else {
      state = englishState;
    }
  }
  switch (action.type) {
    case UPDATE_LOCALE:
      I18n.locale = action.payload.locale;
      return state;
    default:
      return state;
  }
};
