import React from 'react';
import { Text, Item, Input, Icon, View } from 'native-base';
import type { FieldProps } from 'redux-form';
import styles from './styles';

type Props = {
  ...FieldProps,
  change: void,
};

const InputField = (props: Props) => {
  const { input, meta: { touched, error } } = props;
  return (
    <View>
      <Item error={error && touched} rounded style={styles.inputGrp}>
        <Icon active name={input.name === 'email' ? 'mail' : 'unlock'} style={{ color: '#fff' }} />
        <Input
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
            onPress={() => props.change(props.input.name, '')}
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
};

export default InputField;
