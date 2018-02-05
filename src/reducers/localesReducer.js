import en from '../../i18n/locales/en.json';

const UPDATE_LOCALES = 'UPDATE_LOCALES';

const initialState = {
  en: {
    ...en,
  },
};

export default (state: any = initialState, action: Function) => {
  switch (action.type) {
    case UPDATE_LOCALES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
