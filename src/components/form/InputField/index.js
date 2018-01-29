import React from 'react';
import { Text, Item, Input, Icon, View } from 'native-base';
import type { FieldProps } from 'redux-form';
import styles from './styles';

export default ({ input, meta: { touched, error } }: FieldProps) => (
  <View>
    <Item error={error && touched} rounded style={styles.inputGrp}>
      <Icon active name={input.name === 'email' ? 'mail' : 'unlock'} style={{ color: '#fff' }} />
      <Input
        ref={c => (this.textInput = c)}
        placeholderTextColor="#FFF"
        style={styles.input}
        placeholder={input.name === 'email' ? 'Email' : 'Password'}
        secureTextEntry={input.name === 'password'}
        {...input}
      />
      {touched && error ? (
        <Icon
          active
          style={styles.formErrorIcon}
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
