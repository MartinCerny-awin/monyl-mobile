// @flow

import React, { Component } from 'react';
import type { Dispatch } from 'redux';
import { Image, ImageBackground, StatusBar } from 'react-native';
import { Trans } from '@lingui/macro';
import {
  Container, Content, Button, View,
} from 'native-base';
import type { NavigationScreenProp } from 'react-navigation';

import ActionSheetPicker from '../../components/ActionSheetPicker';
import type { LocalesActions } from '../../reducers/localesReducer';
import { localesActions } from '../../reducers/localesReducer';
import styles from './styles';

type Props = {
  navigation: NavigationScreenProp<{}>,
  currentLocale: string,
  dispatch: Dispatch<LocalesActions>,
};

class Login extends Component<Props> {
  changeLocale = (value: string) => {
    this.props.dispatch(localesActions.updateLocale(value));
  };

  navigateSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  navigateLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <View style={styles.languageSwitcher}>
              <ActionSheetPicker
                currentOption={this.props.currentLocale}
                options={{ en: 'English', cs: 'Čeština' }}
                onChange={this.changeLocale}
              />
            </View>
            <View style={styles.logoContainer}>
              <Image source={require('../../../assets/header-logo.png')} style={styles.logo} />
            </View>
            <View style={styles.btnContainer}>
              <Button
                jest="signUp"
                rounded
                primary
                block
                style={styles.btn}
                onPress={this.navigateSignUp}
              >
                <Trans>Create account</Trans>
              </Button>
              <Button
                jest="login"
                rounded
                primary
                block
                bordered
                style={styles.btn}
                textStyle={{ fontWeight: 900 }}
                onPress={this.navigateLogin}
              >
                <Trans>I already have account</Trans>
              </Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Login;
