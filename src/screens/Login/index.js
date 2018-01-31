// @flow
import React, { Component } from 'react';
import { Dimensions, Image, ImageBackground, Platform, StatusBar, StyleSheet } from 'react-native';
import { Container, Content, Text, Button, View, Left, Right, Toast } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import InputField from '../../components/form/InputField';
import { required, email } from '../../utils/validator';

const bg = require('../../../assets/bg.png');
const logo = require('../../../assets/logo.png');

type Props = {
  navigation: () => void,
  valid: boolean,
  change: void,
};

class LoginForm extends Component<Props> {
  login() {
    if (this.props.valid) {
      this.props.navigation.navigate('Walkthrough');
    } else {
      Toast.show({
        text: 'Enter Valid Username & password!',
        duration: 2500,
        position: 'top',
        textStyle: { textAlign: 'center' },
      });
    }
  }

  render() {
    const { navigation, change } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={bg} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.formContainer}>
              <View style={styles.form}>
                <Field
                  name="email"
                  component={InputField}
                  type="email"
                  change={change}
                  validate={[required, email]}
                />
                <Field
                  name="password"
                  component={InputField}
                  type="password"
                  change={change}
                  validate={[required]}
                />

                <Button
                  rounded
                  primary
                  block
                  large
                  style={styles.loginBtn}
                  onPress={() => this.login()}
                >
                  <Text style={styles.loginBtnText}>Get Started</Text>
                </Button>

                <View style={styles.otherLinksContainer}>
                  <Left>
                    <Button small transparent onPress={() => navigation.navigate('SignUp')}>
                      <Text style={styles.secondaryBtn}>Create Account</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button small transparent onPress={() => navigation.navigate('ForgotPassword')}>
                      <Text style={styles.secondaryBtn}>Forgot Password</Text>
                    </Button>
                  </Right>
                </View>
                <View style={{ alignSelf: 'flex-end' }}>
                  <Button
                    light
                    small
                    transparent
                    style={styles.skipBtn}
                    onPress={() => navigation.navigate('Walkthrough')}
                  >
                    <Text style={([styles.helpBtns], { top: Platform.OS === 'ios' ? null : 0 })}>
                      Skip
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 1,
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
  otherLinksContainer: {
    // eslint-disable-next-line no-nested-ternary
    paddingTop: deviceHeight < 600 ? 5 : Platform.OS === 'android' ? 10 : 15,
    flexDirection: 'row',
  },
  secondaryBtn: {
    opacity: 0.9,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
  },
  skipBtn: {
    margin: 10,
    borderWidth: 0.4,
    borderColor: '#FFF',
  },
});

const Login = reduxForm({
  form: 'login',
})(LoginForm);
export default Login;
