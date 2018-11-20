// @flow

import { Dimensions, Platform } from 'react-native';

export default {
  header: {
    width: Dimensions.get('window').width,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 5,
    marginLeft: Platform.OS === 'ios' ? undefined : -30,
  },
  rowHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingTop: Platform.OS === 'android' ? 5 : 0,
  },
  btnHeader: {
    alignSelf: 'center',
  },
  imageHeader: {
    height: 55,
    resizeMode: 'contain',
  },
};