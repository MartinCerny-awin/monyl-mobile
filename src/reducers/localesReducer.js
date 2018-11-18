// @flow

import i18n from '../utils/i18n';
import type { ExtractReturn } from '../types';

const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';

export const updateLocale = (currentLocale: string) => {
  i18n.activate(currentLocale);
  return {
    type: UPDATE_LANGUAGE,
    payload: {
      currentLocale,
    },
  };
};

export type UpdateLocaleAction = ExtractReturn<typeof updateLocale>;

export type LocalesActions =
  | UpdateLocaleAction;


export const initialState = {
  currentLocale: 'cs',
};

export type LocalesStoreFlowType = {
  currentLocale: string,
}

export default (state: LocalesStoreFlowType = initialState, action: LocalesActions) => {
  switch (action.type) {
    case UPDATE_LANGUAGE:
      return {
        ...state,
        currentLocale: action.payload.currentLocale,
      };

    default:
      return state;
  }
};
