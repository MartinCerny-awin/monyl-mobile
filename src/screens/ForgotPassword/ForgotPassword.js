// @flow
import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Text, Container, Content, Button, View, Toast } from 'native-base';
import { Field } from 'redux-form';

import { required, email } from '../../utils/validator';
import commonMessages from '../../i18n/commonMessages';
import translate from '../../i18n/translate';
import HeaderBack from '../../components/header/HeaderBack';
import InputField from '../../components/form/InputField';
import styles from './styles';

type Props = {
  navigation: () => void,
  valid: boolean,
};

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

  render() {
    return (
      <Container>
        <HeaderBack
          title={translate({
            id: 'screens.forgotPassword.title',
            defaultValue: 'Reset your password',
          })}
          navigation={this.props.navigation}
        />
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.background}>
          <Content contentContainerStyle={styles.contentContainer}>
            <View style={styles.formContainer}>
              <Field
                name="email"
                label={translate(commonMessages.email)}
                component={InputField}
                icon="mail"
                validate={[required, email]}
              />

              <Button jest="sendEmail" rounded primary block onPress={this.submit}>
                <Text style={{ color: '#FFFFFF' }}>
                  {translate({
                    id: 'screens.forgotPassword.sendEmail',
                    defaultValue: 'Send Email',
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

export default ForgotPassword;
