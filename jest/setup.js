import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NativeModules } from 'react-native';

const languages = ['en']; // / your desired locales here if needed

NativeModules.RNI18n = {
  languages,
  getLanguages: () => languages,
};
configure({ adapter: new Adapter() });
