// @flow

import { Platform } from 'react-native';

import commonColor from '../../theme/variables/commonColor';

export default {
  links: {
    paddingTop: Platform.OS === 'android' ? 8 : 10,
    paddingBottom: Platform.OS === 'android' ? 8 : 10,
    paddingLeft: Platform.OS === 'android' ? 0 : 10,
    borderBottomWidth: Platform.OS === 'android' ? 0 : 0,
    borderBottomColor: 'transparent',
  },
  linkIcon: {
    color: '#fff',
    paddingRight: 15,
  },
  linkText: {
    color: '#fff',
  },
  background: {
    flex: 1,
    backgroundColor: commonColor.brandPrimary,
  },
  drawerContent: {
    paddingTop: Platform.OS === 'android' ? 20 : 30,
  },
};
