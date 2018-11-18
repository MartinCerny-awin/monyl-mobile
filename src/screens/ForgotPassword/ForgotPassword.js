// @flow
import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import {
  Container, Content, Button, View, Toast,
} from 'native-base';
import { Field } from 'redux-form';
import { Trans, t } from '@lingui/macro';
import type { NavigationScreenProp } from 'react-navigation';

import i18n from '../../utils/i18n';
import { required, email } from '../../utils/validator';
import HeaderBack from '../../components/header/HeaderBack';
import InputField from '../../components/form/InputField';
import styles from './styles';

type Props = {
  navigation: NavigationScreenProp<{}>,
  valid: boolean,
};

class ForgotPassword extends Component<Props> {
  submit = () => {
    if (this.props.valid) {
      this.props.navigation.goBack(null);
    } else {
      Toast.show({
        text: i18n._(t`Enter Valid Email`),
        duration: 2500,
        position: 'top',
        textStyle: { textAlign: 'center' },
      });
    }
  };

  render() {
    return (
      <Container>
        <HeaderBack
          title={i18n._(t`Reset your password`)}
          navigation={this.props.navigation}
        />
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <View style={styles.formContainer}>
              <Field
                name="email"
                label={i18n._(t`Email`)}
                component={InputField}
                icon="mail"
                validate={[required, email]}
              />

              <Button jest="sendEmail" rounded primary block onPress={this.submit}>
                <Trans>Send email</Trans>
              </Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default ForgotPassword;
