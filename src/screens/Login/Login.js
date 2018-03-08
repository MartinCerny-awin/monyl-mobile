// @flow
import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar } from 'react-native';
import { Container, Content, Button, View, Toast } from 'native-base';
import { defineMessages } from 'react-intl';
import { Field } from 'redux-form';
import type { FormProps } from 'redux-form';

import commonMessages from '../../i18n/commonMessages';
import InputField from '../../components/form/InputField';
import { required, email } from '../../utils/validator';

import styles from './styles';
import FormattedMessage from "../../i18n/FormattedMessage";
import translateLabel from "../../i18n/translateLabel";

type Props = {
  navigation: () => void,
  valid: boolean,
  change: void,
} & FormProps;

const messages = defineMessages({
  validation: {
    id: 'screens.login.validation',
    defaultMessage: 'Enter username and password',
  },
});

class Login extends Component<Props> {
  submit = () => {
    if (this.props.valid) {
      this.props.navigation.navigate('Home');
    } else {
      Toast.show({
        text: translateLabel(messages.validation),
        duration: 2500,
        position: 'top',
        textStyle: { textAlign: 'center' },
      });
    }
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
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <View style={styles.emptyContainer} />
            <View style={styles.logoContainer}>
              <Image source={require('../../../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.formContainer}>
              <View style={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
                <Field
                  name="email"
                  label={translateLabel(commonMessages.email)}
                  component={InputField}
                  icon="mail"
                  change={change}
                  validate={[required, email]}
                />
                <Field
                  secureTextEntry
                  name="password"
                  label={translateLabel(commonMessages.password)}
                  component={InputField}
                  icon="lock"
                  change={change}
                  validate={[required]}
                />
                <Button jest="login" rounded primary block onPress={this.submit}>
                  <FormattedMessage  style={{color: "#FFFFFF"}} id="screens.login.btn.login" defaultMessage="Login" />
                </Button>

                <View style={styles.bottomLinksContainer}>
                  <Button jest="signUp" small transparent onPress={this.navigateSignUp}>
                    <FormattedMessage
                      id="screens.login.btn.createAccount"
                      defaultMessage="Create Account"
                    />
                  </Button>
                  <Button
                    jest="forgotPassword"
                    small
                    transparent
                    onPress={this.navigateForgotPassword}
                  >
                    <FormattedMessage
                      id="screens.login.btn.forgotPassword"
                      defaultMessage="Forgot Password"
                    />
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

export default Login;
