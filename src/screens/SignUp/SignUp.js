// @flow

import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import {
  Container, Content, Button, Toast,
} from 'native-base';
import { Field } from 'redux-form';
import { Trans, t } from '@lingui/macro';
import type { NavigationScreenProp } from 'react-navigation';

import i18n from '../../utils/i18n';
import HeaderBack from '../../components/header/HeaderBack';
import { minLength, required, email } from '../../utils/validator';
import InputField from '../../components/form/InputField';
import styles from './styles';

type Props = {
  navigation: NavigationScreenProp<{}>,
  valid: boolean,
};

class SignUp extends Component<Props> {
  submit = () => {
    const { navigation, valid } = this.props;
    if (valid) {
      navigation.navigate('Walkthrough');
    } else {
      Toast.show({
        text: i18n._(t`You have to fill all fields.`),
        duration: 2500,
        position: 'top',
        textStyle: { textAlign: 'center' },
      });
    }
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <HeaderBack
          title={i18n._(t`Create account`)}
          navigation={navigation}
        />
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <Field
              name="firstName"
              icon="person"
              label={i18n._(t`First name`)}
              component={InputField}
              type="text"
              validate={[required]}
            />

            <Field
              name="lastName"
              icon="person"
              label={i18n._(t`Last name`)}
              component={InputField}
              type="text"
              validate={[required]}
            />

            <Field
              name="email"
              icon="mail"
              label={i18n._(t`Email`)}
              component={InputField}
              type="email"
              validate={[email, required]}
            />
            <Field
              secureTextEntry
              name="password"
              icon="unlock"
              label={i18n._(t`Password`)}
              component={InputField}
              type="password"
              validate={[required, minLength(8)]}
            />

            <Button
              rounded
              bordered
              block
              onPress={this.submit}
            >
              <Trans>Continue</Trans>
            </Button>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default SignUp;
