const React = require('react-native');

const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    height: deviceHeight / 4,
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginBtn: {
    marginTop: 7,
    height: 50,
  },
  otherLinksContainer: {
    // eslint-disable-next-line no-nested-ternary
    paddingTop: deviceHeight < 600 ? 5 : Platform.OS === 'android' ? 10 : 15,
    flexDirection: 'row',
  },
  helpBtns: {
    opacity: 0.9,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
  },
  skipBtn: {
    alignSelf: 'flex-end',
    marginTop: 10,
    borderWidth: 0.4,
    borderColor: '#FFF',
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
};
