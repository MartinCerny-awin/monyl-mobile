import { Platform } from 'react-native';
import commonColor from '../../../theme/variables/commonColor';

export default {
  inputGrp: {
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  formErrorText1: {
    fontSize: Platform.OS === 'android' ? 12 : 15,
    color: commonColor.brandDanger,
    textAlign: 'right',
    top: 15,
    right: 20,
  },
};
