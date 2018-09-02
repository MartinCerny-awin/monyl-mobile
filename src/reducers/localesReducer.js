// @flow

import type { ExtractReturn } from '../types';

import en from '../../i18n/locales/en.json';
import cs from '../../i18n/locales/cs.json';

const UPDATE_LOCALE = 'UPDATE_LOCALE';

export const updateLocale = (locale: string) => ({
  type: UPDATE_LOCALE,
  payload: {
    locale,
  },
});

export type UpdateLocaleAction = ExtractReturn<typeof updateLocale>;

export type LocalesActions =
  | UpdateLocaleAction;

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

export default (state: any = englishState, action: Function) => {
  switch (action.type) {
    case UPDATE_LOCALE:
      switch (action.payload.locale) {
        case 'cs':
          return {
            ...state,
            ...czechState,
          };

        default:
          return {
            ...state,
            ...englishState,
          };
      }
    default:
      return state;
  }
};
