// @flow

import { StyleSheet } from 'react-native';

import commonColor from '../../../theme/variables/commonColor';

export default StyleSheet.create({
  inputGroup: {
    backgroundColor: '#fff',
    marginBottom: 15,
    height: 50,
  },
  inputWrapper: {
    width: '80%',
  },
  inputStyle: {
    top: 8,
    lineHeight: 20,
  },
  error: {
    fontSize: 13,
    color: commonColor.brandDanger,
    textAlign: 'right',
  },
});
