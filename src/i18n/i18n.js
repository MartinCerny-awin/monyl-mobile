import I18n from 'react-native-i18n';
import en from './en';
import cs from './cs';

I18n.fallbacks = true;

I18n.translations = {
  en,
  cs,
};

export default I18n;
