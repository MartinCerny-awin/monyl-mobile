// @flow
import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar } from 'react-native';
import { Text, Container, Content, Button, View, Toast } from 'native-base';
import { Field } from 'redux-form';

import commonMessages from '../../i18n/commonMessages';
import translate from '../../i18n/translate';
import InputField from '../../components/form/InputField';
import { required, email } from '../../utils/validator';

import styles from './styles';

type Props = {
  navigation: () => void,
  valid: boolean,
  change: void,
};

class Login extends Component<Props> {
  submit = () => {
    if (this.props.valid) {
      this.props.navigation.navigate('Home');
    } else {
      Toast.show({
        text: translate({
          id: 'screens.login.validation',
          defaultValue: 'Enter username and password',
        }),
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
              <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
                <Field
                  name="email"
                  label={translate(commonMessages.email)}
                  component={InputField}
                  icon="mail"
                  change={change}
                  validate={[required, email]}
                />
                <Field
                  secureTextEntry
                  name="password"
                  label={translate(commonMessages.password)}
                  component={InputField}
                  icon="lock"
                  change={change}
                  validate={[required]}
                />
                <Button jest="login" rounded primary block onPress={this.submit}>
                  <Text>
                    {translate({
                      id: 'screens.login.btn.login',
                      defaultValue: 'Login',
                    })}
                  </Text>
                </Button>

                <View style={styles.bottomLinksContainer}>
                  <Button jest="signUp" small transparent onPress={this.navigateSignUp}>
                    <Text>
                      {translate({
                        id: 'screens.login.btn.createAccount',
                        defaultValue: 'Create Account',
                      })}
                    </Text>
                  </Button>
                  <Button
                    jest="forgotPassword"
                    small
                    transparent
                    onPress={this.navigateForgotPassword}
                  >
                    <Text>
                      {translate({
                        id: 'screens.login.btn.forgotPassword',
                        defaultValue: 'Forgot Password',
                      })}
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
