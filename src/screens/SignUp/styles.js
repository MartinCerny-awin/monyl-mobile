const React = require('react-native');

const { Dimensions, Platform } = React;
const commonColor = require('../../theme/variables/commonColor');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const primary = require('../../theme/variables/commonColor').brandPrimary;

let signupMarginTop;
if (Platform.OS === 'android') {
  signupMarginTop = deviceHeight / 10;
} else if (deviceWidth < 330) {
  signupMarginTop = deviceHeight / 9;
} else {
  signupMarginTop = deviceHeight / 8;
}
signupMarginTop -= 20;

export default {
  signupContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    // eslint no-nested-ternary: 0
    marginTop: signupMarginTop,
  },
  signupHeader: {
    alignSelf: 'center',
    fontSize: 22,
    padding: 10,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: Platform.OS === 'android' ? deviceHeight / 6 : deviceHeight / 6 + 10,
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: primary,
  },
  formErrorIcon: {
    color: '#fff',
    marginTop: 5,
    right: 10,
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
  inputGrp: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  input: {
    paddingLeft: 10,
    color: '#FFF',
  },
  signupBtn: {
    height: 50,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  otherLinkText: {
    alignSelf: 'center',
    opacity: 0.8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#EFF',
  },
  otherLinksContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  helpBtns: {
    opacity: 0.9,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
};
