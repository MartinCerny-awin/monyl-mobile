// @flow

import React from 'react';
import { Picker, View } from 'react-native';

type Props = {
  currentOption: string,
  options: {[string]: string},
  onChange: (value: string) => void,
};

export default (props: Props) => (
  <View>
    <Picker
      selectedValue={props.currentOption}
      onValueChange={itemValue => props.onChange(itemValue)}
      style={style.button}
    >
      {Object.keys(props.options).map(locale => (
        <Picker.Item key={locale} label={props.options[locale]} value={locale} />
      ))}
    </Picker>
  </View>
);

const style = {
  button: {
    marginBottom: 10,
    color: '#fff',
    width: 100,
  },
};
