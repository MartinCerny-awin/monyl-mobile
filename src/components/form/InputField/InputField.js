import React from 'react';
import { Text, Item, Input, Icon, View } from 'native-base';
import type { FieldProps } from 'redux-form';
import styles from './styles';

type Props = {
  ...FieldProps,
  change: void,
};

const InputField = (props: Props) => {
  const {
    input, meta: { touched, error }, icon, secureTextEntry, label,
  } = props;
  return (
    <View>
      <Item error={error && touched} rounded style={styles.inputGroup}>
        {icon && <Icon active name={icon} />}
        <Input placeholder={label} secureTextEntry={secureTextEntry} {...input} />
        {touched &&
          error && (
            <Text jest="errorMessage" style={styles.error}>
              {error}
            </Text>
          )}
      </Item>
    </View>
  );
};

export default InputField;
