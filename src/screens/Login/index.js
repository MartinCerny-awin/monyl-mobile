// @flow
import React, { Component } from 'react';
import { Image, ImageBackground, Platform, StatusBar } from 'react-native';
import { Container, Content, Text, Button, View, Left, Right, Toast } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import InputField from '../../components/form/InputField';
import { required, email } from '../../utils/validator';
import styles from './styles';

const bg = require('../../../assets/bg.png');
const logo = require('../../../assets/logo.png');

type Props = {
  navigation: () => void,
  valid: boolean,
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
    const { navigation } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={bg} style={styles.background}>
          <Content contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.container}>
              <View style={styles.form}>
                <Field
                  name="email"
                  component={InputField}
                  type="email"
                  validate={[required, email]}
                />
                <Field
                  name="password"
                  component={InputField}
                  type="password"
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
                  <Text
                    style={
                      Platform.OS === 'android'
                        ? { fontSize: 16, textAlign: 'center', top: -5 }
                        : { fontSize: 16, fontWeight: '900' }
                    }
                  >
                    Get Started
                  </Text>
                </Button>

                <View style={styles.otherLinksContainer}>
                  <Left>
                    <Button
                      small
                      transparent
                      style={{ alignSelf: 'flex-start' }}
                      onPress={() => navigation.navigate('SignUp')}
                    >
                      <Text style={styles.helpBtns}>Create Account</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button
                      small
                      transparent
                      style={{ alignSelf: 'flex-end' }}
                      onPress={() => navigation.navigate('ForgotPassword')}
                    >
                      <Text style={styles.helpBtns}>Forgot Password</Text>
                    </Button>
                  </Right>
                </View>
                <View style={{ flex: 1, alignSelf: 'flex-end' }}>
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
const Login = reduxForm({
  form: 'login',
})(LoginForm);
export default Login;
