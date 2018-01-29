// @flow
import React, { Component } from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Item,
  Input,
  View,
  Toast,
  Footer,
} from 'native-base';
import { Field, reduxForm } from 'redux-form';
import styles from './styles';

const required = value => (value ? undefined : 'Required');
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined);
type Props = {
  navigation: () => void,
  valid: boolean,
};

type State = {
  offset: {
    x: number,
    y: number,
  },
};
class ForgotPasswordForm extends Component<Props, State> {
  state = {
    offset: {
      x: 0,
      y: 0,
    },
  };

  textInput: any;

  forgotPassword() {
    if (this.props.valid) {
      this.props.navigation.goBack();
    } else {
      Toast.show({
        text: 'Enter Valid Email',
        duration: 2500,
        position: 'top',
        textStyle: { textAlign: 'center' },
      });
    }
  }

  renderInput({ input, meta: { touched, error } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon active name="mail" style={{ color: '#fff' }} />
          <Input
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder="Email"
            {...input}
            // eslint-disable-next-line no-return-assign
            ref={c => (this.textInput = c)}
          />
          {touched && error ? (
            <Icon
              active
              style={styles.formErrorIcon}
              // eslint-disable-next-line no-underscore-dangle
              onPress={() => this.textInput._root.clear()}
              name="close"
            />
          ) : (
            <Text />
          )}
        </Item>
        {touched && error ? (
          <Text style={styles.formErrorText1}>{error}</Text>
        ) : (
          <Text style={styles.formErrorText2}>error here</Text>
        )}
      </View>
    );
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require('../../../assets/bg-signup.png')}
          style={styles.background}
        >
          <Content contentOffset={this.state.offset}>
            <Content padder scrollEnabled={false}>
              <Text style={styles.forgotPasswordHeader}>Forgot Your Password?</Text>
              <View style={styles.forgotPasswordContainer}>
                <Field
                  name="email"
                  component={this.renderInput}
                  type="email"
                  validate={[email, required]}
                />

                <Button
                  rounded
                  block
                  bordered
                  onPress={() => this.forgotPassword()}
                  style={styles.emailBtn}
                >
                  <Text style={{ color: '#FFF' }}>Send Email</Text>
                </Button>
              </View>
            </Content>
          </Content>
          <Footer
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.helpBtns}>Back To Login</Text>
            </Button>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

const ForgotPassword = reduxForm({
  form: 'help',
})(ForgotPasswordForm);
export default ForgotPassword;
