// @flow
import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, Text, Button, View, Toast, Left, Header, Icon } from 'native-base';
import { Field } from 'redux-form';
import type { IntlShape } from 'react-intl';

import { required, email } from '../../utils/validator';
import commonMessages from '../../i18n/common';
import InputField from '../../components/form/InputField';
import styles from './styles';

type Props = {
  navigation: () => void,
  valid: boolean,
  intl: IntlShape,
};

class ForgotPassword extends Component<Props> {
  submit() {
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
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack(null)}>
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Text style={styles.forgotPasswordHeader}>Forgot Your Password?</Text>
        </Header>
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

              <Button rounded primary block onPress={this.submit}>
                <Text>Send Email</Text>
              </Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default ForgotPassword;
