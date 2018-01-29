import { Platform, Dimensions } from 'react-native';

const primary = '#01cca1';

const deviceHeight = Dimensions.get('window').height;
export default () => {
  const theme = {
    flex: 1,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
    backgroundColor: primary,
  };

  return theme;
};
