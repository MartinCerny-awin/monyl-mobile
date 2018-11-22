// @flow

import React, { Component } from 'react';
import { Trans, t } from '@lingui/macro';
import { Image, ImageBackground, StatusBar } from 'react-native';
import {
  Container, Content, Button, View, Toast,
} from 'native-base';
import { Field } from 'redux-form';
import type { FormProps } from 'redux-form';
import type { NavigationScreenProp } from 'react-navigation';

import i18n from '../../utils/i18n';
import InputField from '../../components/form/InputField';
import { required, email } from '../../utils/validator';

import styles from './styles';

type Props = {
  navigation: NavigationScreenProp<{}>,
  valid: boolean,
  change: void,
} & FormProps;

class Login extends Component<Props> {
  submit = () => {
    if (this.props.valid) {
      this.props.navigation.navigate('Home');
    } else {
      Toast.show({
        text: i18n._(t`Enter username and password`),
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
              <Image source={require('../../../assets/header-logo.png')} style={styles.logo} />
            </View>
            <View style={styles.formContainer}>
              <View style={styles.innerFormContainer}>
                <Field
                  name="email"
                  label={i18n._(t`Email`)}
                  component={InputField}
                  icon="mail"
                  change={change}
                  validate={[required, email]}
                />
                <Field
                  secureTextEntry
                  name="password"
                  label={i18n._(t`Password`)}
                  component={InputField}
                  icon="lock"
                  change={change}
                  validate={[required]}
                />
                <Button jest="login" rounded primary block onPress={this.submit}>
                  <Trans>Login</Trans>
                </Button>

                <View style={styles.bottomLinksContainer}>
                  <Button jest="signUp" small transparent onPress={this.navigateSignUp}>
                    <Trans>Create account</Trans>
                  </Button>
                  <Button
                    jest="forgotPassword"
                    small
                    transparent
                    onPress={this.navigateForgotPassword}
                  >
                    <Trans>Forgot password</Trans>
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
