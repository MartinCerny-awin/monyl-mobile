// @flow
import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar } from 'react-native';
import {
  Container, Content, Button, View,
} from 'native-base';
import { FormattedMessage } from 'react-intl';
import type { NavigationScreenProp } from 'react-navigation';
import type { Dispatch } from 'redux';

import ActionSheetPicker from '../../components/ActionSheetPicker';

import type { LocalesActions } from '../../reducers/localesReducer';
import { updateLocale } from '../../reducers/localesReducer';
import styles from './styles';

type Props = {
  navigation: NavigationScreenProp<{}>,
  dispatch: Dispatch<LocalesActions>,
  currentLocale: string,
};

class Login extends Component<Props> {
  changeLocale = (value: string) => {
    this.props.dispatch(updateLocale(value));
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
              <Image source={require('../../../assets/logo.png')} style={styles.logo} />
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
                <FormattedMessage id="screens.initial.btn.signUp" defaultMessage="Create account" />
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
                <FormattedMessage
                  id="screens.initial.btn.login"
                  defaultMessage="I already have account"
                />
              </Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Login;
