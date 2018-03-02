// @flow
import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, Button, View, Toast } from 'native-base';
import { Field } from 'redux-form';
import { FormattedMessage, defineMessages } from 'react-intl';
import type { IntlShape } from 'react-intl';

import { required, email } from '../../utils/validator';
import commonMessages from '../../i18n/commonMessages';
import HeaderBack from '../../components/header/HeaderBack';
import InputField from '../../components/form/InputField';
import styles from './styles';

type Props = {
  navigation: () => void,
  valid: boolean,
  intl: IntlShape,
};

const messages = defineMessages({
  title: {
    id: 'screens.forgotPassword.title',
    defaultMessage: 'Reset your password',
  },
});

class ForgotPassword extends Component<Props> {
  submit = () => {
    if (this.props.valid) {
      this.props.navigation.goBack(null);
    } else {
      Toast.show({
        text: 'Enter Valid Email',
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
          title={this.props.intl.formatMessage(messages.title)}
          action={this.navigateBack}
        />
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <View style={styles.formContainer}>
              <Field
                name="email"
                label={this.props.intl.formatMessage(commonMessages.email)}
                component={InputField}
                icon="mail"
                validate={[required, email]}
              />

              <Button jest="sendEmail" rounded primary block onPress={this.submit}>
                <FormattedMessage
                  id="screens.forgotPassword.sendEmail"
                  defaultMessage="Send Email"
                />
              </Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default ForgotPassword;