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
  linkText: {
    paddingLeft: 15,
  },
  logoutContainer: {
    padding: 30,
    paddingTop: 0,
  },
  logoutbtn: {
    paddingTop: 30,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#fff',
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: commonColor.brandPrimary,
  },
  drawerContent: {
    paddingTop: Platform.OS === 'android' ? 20 : 30,
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: Platform.OS === 'android' ? 40 : 20,
  },
};
