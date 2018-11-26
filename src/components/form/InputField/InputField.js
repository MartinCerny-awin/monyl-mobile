// @flow

import React from 'react';
import {
  Text, Item, Input, Icon, View,
} from 'native-base';
import type { FieldProps } from 'redux-form';
import styles from './styles';

type Props = {
  ...FieldProps,
  change: void,
  icon: ?string,
  secureTextEntry: boolean,
  label: string,
};

class InputField extends React.Component<Props> {
  render() {
    const {
      input, meta, icon, secureTextEntry, label,
    } = this.props;

    const touched = meta ? meta.touched : false;
    const error = meta ? meta.error : false;

    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGroup}>
          {icon && <Icon active name={icon} />}
          <View style={styles.inputWrapper}>
            <Input
              style={styles.inputStyle}
              placeholder={label}
              secureTextEntry={secureTextEntry}
              {...input}
            />
            <Text style={styles.error}>
              {touched && error ? error : ' '}
            </Text>
          </View>
        </Item>
      </View>
    );
  }
}

export default InputField;
