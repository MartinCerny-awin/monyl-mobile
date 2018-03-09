// @flow
import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar } from 'react-native';
import { Text, Container, Content, Button, View } from 'native-base';
import I18n from 'react-native-i18n';

import ActionSheetPicker from '../../components/ActionSheetPicker';

import styles from './styles';
import translate from '../../i18n/translate';

type Props = {
  navigation: () => void,
};

type State = {
  lang: string,
};

class Login extends Component<Props, State> {
  state = {
    lang: I18n.locale === 'cs-CZ' ? 'cs' : 'en',
  };

  changeLocale = (value: string) => {
    I18n.locale = value;
    this.setState({
      lang: value,
    });
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
                currentOption={this.state.lang}
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
                <Text>
                  {translate({
                    id: 'screens.login.btn.createAccount',
                    defaultValue: 'Create Account',
                  })}
                </Text>
              </Button>
              <Button
                jest="login"
                rounded
                primary
                block
                bordered
                style={styles.btn}
                onPress={this.navigateLogin}
              >
                <Text>
                  {translate({
                    id: 'screens.initial.btn.login',
                    defaultValue: 'I already have account',
                  })}
                </Text>
              </Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Login;
