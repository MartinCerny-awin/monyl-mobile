// @flow
import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar } from 'react-native';
import { Container, Content, Text, Button, View } from 'native-base';
import { FormattedMessage } from 'react-intl';

import ActionSheetPicker from '../../components/ActionSheetPicker';

import { updateLocale } from '../../reducers/localesReducer';
import styles from './styles';

const bg = require('../../../assets/bg.png');
const logo = require('../../../assets/logo.png');

type Props = {
  navigation: () => void,
  dispatch: void,
  currentLocale: string,
};

class Login extends Component<Props> {
  changeLocale = (value) => {
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
        <ImageBackground source={bg} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <View style={styles.languageSwitcher}>
              <ActionSheetPicker
                currentOption={this.props.currentLocale}
                options={{ en: 'English', cs: 'Čeština' }}
                onChange={this.changeLocale}
              />
            </View>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
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
