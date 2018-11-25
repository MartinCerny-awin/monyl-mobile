// @flow

import i18n from '../utils/i18n';
import type { ExtractReturn } from '../types';

export const types = {
  UPDATE_LANGUAGE: 'UPDATE_LANGUAGE',
};

const updateLocale = (currentLocale: string) => {
  i18n.activate(currentLocale);
  return {
    type: types.UPDATE_LANGUAGE,
    payload: {
      currentLocale,
    },
  };
};

export type UpdateLocaleAction = ExtractReturn<typeof updateLocale>;
export type LocalesActions =
  | UpdateLocaleAction;

export const localesActions = {
  updateLocale,
};

export const initialState = {
  currentLocale: 'cs',
};

export type LocalesStoreFlowType = {
  currentLocale: string,
}

export default (
  state: LocalesStoreFlowType = initialState,
  action: $Shape<LocalesActions> = {},
) => {
  switch (action.type) {
    case types.UPDATE_LANGUAGE:
      return {
        ...state,
        currentLocale: action.payload.currentLocale,
      };

    default:
      return state;
  }
};
