// @flow
import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar } from 'react-native';
import { Container, Content, Text, Button, View, Toast } from 'native-base';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';
import type { FormProps } from 'redux-form';

import commonMessages from '../../i18n/common';
import InputField from '../../components/form/InputField';
import { required, email } from '../../utils/validator';

import { updateLocale } from '../../reducers/localesReducer';
import styles from './styles';

const bg = require('../../../assets/bg.png');
const logo = require('../../../assets/logo.png');

type Props = {
  navigation: () => void,
  valid: boolean,
  change: void,
} & FormProps;

class Login extends Component<Props> {
  login = () => {
    if (this.props.valid) {
      this.props.navigation.navigate('Home');
    } else {
      Toast.show({
        text: 'Enter valid username & password!',
        duration: 2500,
        position: 'top',
        textStyle: { textAlign: 'center' },
      });
    }
  };

  changeLocale = (value) => {
    this.props.dispatch(updateLocale(value));
  };

  navigateForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  navigateSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    const { change } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={bg} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <View style={styles.emptyContainer} />
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.formContainer}>
              <View>
                <Field
                  name="email"
                  label={this.props.intl.formatMessage(commonMessages.email)}
                  component={InputField}
                  icon="mail"
                  change={change}
                  validate={[required, email]}
                />
                <Field
                  secureTextEntry
                  name="password"
                  label={this.props.intl.formatMessage(commonMessages.password)}
                  component={InputField}
                  icon="lock"
                  change={change}
                  validate={[required]}
                />

                <Button
                  jest="login"
                  rounded
                  primary
                  block
                  large
                  style={styles.loginBtn}
                  onPress={this.login}
                >
                  <Text style={styles.loginBtnText}>
                    <FormattedMessage id="screens.login.btn.login" defaultMessage="Login" />
                  </Text>
                </Button>

                <View style={styles.bottomLinksContainer}>
                  <View>
                    <Button jest="signUp" small transparent onPress={this.navigateSignUp}>
                      <Text style={styles.bottomLinkText}>
                        <FormattedMessage
                          id="screens.login.btn.createAccount"
                          defaultMessage="Create Account"
                        />
                      </Text>
                    </Button>
                  </View>
                  <View>
                    <Button
                      jest="forgotPassword"
                      small
                      transparent
                      onPress={this.navigateForgotPassword}
                    >
                      <Text style={styles.bottomLinkText}>
                        <FormattedMessage
                          id="screens.login.btn.forgotPassword"
                          defaultMessage="Forgot Password"
                        />
                      </Text>
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Login;
