import { Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
export default {
  background: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: { flex: 1, flexDirection: 'row' },
  emptyContainer: { flex: 1 },
  logoContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    height: 100,
    width: undefined,
  },
  languageSwitcher: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  formContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  form: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginBtn: {
    height: 50,
  },
  loginBtnText: {
    fontSize: 16,
  },
  bottomLinksContainer: {
    // eslint-disable-next-line no-nested-ternary
    paddingTop: 15,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondaryBtnText: {
    opacity: 0.9,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
  },
};
