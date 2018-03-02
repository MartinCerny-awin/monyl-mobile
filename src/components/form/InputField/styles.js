import { Platform } from 'react-native';
import commonColor from '../../../theme/variables/commonColor';

export default {
  inputGroup: {
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  error: {
    fontSize: Platform.OS === 'android' ? 12 : 15,
    color: commonColor.brandDanger,
    textAlign: 'right',
    top: 15,
    right: 20,
  },
};
