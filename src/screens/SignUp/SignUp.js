// @flow
import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, Button, Toast } from 'native-base';
import { Field } from 'redux-form';
import { defineMessages, FormattedMessage } from 'react-intl';
import type { IntlShape } from 'react-intl';

import HeaderBack from '../../components/header/HeaderBack';
import commonMessages from '../../i18n/commonMessages';
import { minLength, required, email } from '../../utils/validator';
import InputField from '../../components/form/InputField';
import styles from './styles';

type Props = {
  navigation: () => void,
  valid: boolean,
  intl: IntlShape,
};

const messages = defineMessages({
  signUp: {
    id: 'screens.signUp.createAccount',
    defaultMessage: 'Create Account',
  },
  validation: {
    id: 'screens.signUp.validation',
    defaultMessage: 'You have to fill all fields.',
  },
});

class SignUp extends Component<Props> {
  submit = () => {
    if (this.props.valid) {
      this.props.navigation.goBack(null);
    } else {
      Toast.show({
        text: this.props.intl.formatMessage(messages.validation),
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
          title={this.props.intl.formatMessage(messages.signUp)}
          action={this.navigateBack}
        />
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <Field
              name="firstName"
              icon="person"
              label={this.props.intl.formatMessage(commonMessages.firstName)}
              component={InputField}
              type="text"
              validate={[required]}
            />

            <Field
              name="lastName"
              icon="person"
              label={this.props.intl.formatMessage(commonMessages.lastName)}
              component={InputField}
              type="text"
              validate={[required]}
            />

            <Field
              name="email"
              icon="mail"
              label={this.props.intl.formatMessage(commonMessages.email)}
              component={InputField}
              type="email"
              validate={[email, required]}
            />
            <Field
              secureTextEntry
              name="password"
              icon="unlock"
              label={this.props.intl.formatMessage(commonMessages.password)}
              component={InputField}
              type="password"
              validate={[required, minLength(8)]}
            />

            <Button
              jest="signUp"
              rounded
              bordered
              block
              onPress={this.submit}
              style={styles.signupBtn}
            >
              <FormattedMessage {...commonMessages.continue} />
            </Button>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default SignUp;
