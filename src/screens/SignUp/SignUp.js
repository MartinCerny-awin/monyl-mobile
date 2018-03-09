// @flow
import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Text, Container, Content, Button, Toast } from 'native-base';
import { Field } from 'redux-form';

import HeaderBack from '../../components/header/HeaderBack';
import commonMessages from '../../i18n/commonMessages';
import { minLength, required, email } from '../../utils/validator';
import InputField from '../../components/form/InputField';
import styles from './styles';
import translate from '../../i18n/translate';

type Props = {
  navigation: () => void,
  valid: boolean,
};

class SignUp extends Component<Props> {
  submit = () => {
    if (this.props.valid) {
      this.props.navigation.goBack(null);
    } else {
      Toast.show({
        text: translate({
          id: 'screens.signUp.validation',
          defaultValue: 'You have to fill all fields.',
        }),
        duration: 2500,
        position: 'top',
        textStyle: { textAlign: 'center' },
      });
    }
  };

  navigateBack = () => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <Container>
        <HeaderBack
          title={translate({
            id: 'screens.signUp.createAccount',
            defaultValue: 'Create Account',
          })}
          action={this.navigateBack}
        />
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <Field
              name="firstName"
              icon="person"
              label={translate(commonMessages.firstName)}
              component={InputField}
              type="text"
              validate={[required]}
            />

            <Field
              name="lastName"
              icon="person"
              label={translate(commonMessages.lastName)}
              component={InputField}
              type="text"
              validate={[required]}
            />

            <Field
              name="email"
              icon="mail"
              label={translate(commonMessages.email)}
              component={InputField}
              type="email"
              validate={[email, required]}
            />
            <Field
              secureTextEntry
              name="password"
              icon="unlock"
              label={translate(commonMessages.password)}
              component={InputField}
              type="password"
              validate={[required, minLength(8)]}
            />

            <Button jest="signUp" rounded bordered block onPress={this.submit}>
              <Text>{translate(commonMessages.continue)}</Text>
            </Button>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default SignUp;
