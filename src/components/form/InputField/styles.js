// @flow

import { Platform } from 'react-native';

import commonColor from '../../../theme/variables/commonColor';

export default {
  inputGroup: {
    backgroundColor: '#fff',
    marginBottom: 15,
    height: 50,
  },
  inputWrapper: {
    width: '80%',
  },
  inputStyle: {
    top: Platform.OS === 'ios' ? 24 : 28,
    paddingTop: Platform.OS === 'ios' ? 4 : 0,
    lineHeight: 20,
    paddingBottom: 20,
    marginTop: -20,
  },
  error: {
    fontSize: 13,
    color: commonColor.brandDanger,
    textAlign: 'right',
  },
};
