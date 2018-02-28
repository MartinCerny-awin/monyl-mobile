const React = require('react-native');

const { Platform } = React;
const commonColor = require('../../../theme/variables/commonColor');

export default {
  inputGrp: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 8,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  input: {
    paddingLeft: 10,
  },
  icon: {
    color: '#000',
  },
  formErrorText1: {
    fontSize: Platform.OS === 'android' ? 12 : 15,
    color: commonColor.brandDanger,
    textAlign: 'right',
    top: -10,
  },
  formErrorText2: {
    fontSize: Platform.OS === 'android' ? 12 : 15,
    color: 'transparent',
    textAlign: 'right',
    top: -10,
  },
};
