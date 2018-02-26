// @flow
import React, { Component } from 'react';
import { Image, ImageBackground, Platform, StatusBar } from 'react-native';
import { Container, Content, Text, Button, View, Left, Right, Toast } from 'native-base';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';
import type { FormProps } from 'redux-form';

import ActionSheetPicker from '../../components/ActionSheetPicker';
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
      this.props.navigation.navigate('Walkthrough');
    } else {
      Toast.show({
        text: 'Enter Valid Username & password!',
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

  navigateWalkthrought = () => {
    this.props.navigation.navigate('Walkthrough');
  };

  render() {
    const { change } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={bg} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <View style={styles.topContainer}>
              <View style={styles.emptyContainer} />
              <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
              </View>
              <View style={styles.languageSwitcher}>
                <ActionSheetPicker
                  currentOption={this.props.currentLocale}
                  options={{ en: 'English', cs: 'Čeština' }}
                  onChange={this.changeLocale}
                />
              </View>
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

                <Button rounded primary block large style={styles.loginBtn} onPress={this.login}>
                  <Text style={styles.loginBtnText}>
                    <FormattedMessage
                      id="screens.login.btn.getStarted"
                      defaultMessage="Get Started"
                    />
                  </Text>
                </Button>

                <View style={styles.otherLinksContainer}>
                  <Left>
                    <Button jest="signUp" small transparent onPress={this.navigateSignUp}>
                      <Text style={styles.secondaryBtn}>
                        <FormattedMessage
                          id="screens.login.btn.createAccount"
                          defaultMessage="Create Account"
                        />
                      </Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button
                      jest="forgotPassword"
                      small
                      transparent
                      onPress={this.navigateForgotPassword}
                    >
                      <Text style={styles.secondaryBtn}>
                        <FormattedMessage
                          id="screens.login.btn.forgotPassword"
                          defaultMessage="Forgot Password"
                        />
                      </Text>
                    </Button>
                  </Right>
                </View>
                <View style={{ alignSelf: 'flex-end' }}>
                  <Button
                    jest="skip"
                    light
                    small
                    transparent
                    style={styles.skipBtn}
                    onPress={this.navigateWalkthrought}
                  >
                    <Text
                      style={([styles.secondaryBtn], { top: Platform.OS === 'ios' ? null : 0 })}
                    >
                      <FormattedMessage id="screens.login.btn.skip" defaultMessage="Skip" />
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

export default Login;
