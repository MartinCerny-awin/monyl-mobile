import React from 'react';
import { Picker, StyleSheet, View } from 'react-native';

type Props = {
  currentOption: string,
  options: Array<string>,
  onChange: void,
};

export default (props: Props) => (
  <View>
    <Picker
      selectedValue={props.currentOption}
      onValueChange={itemValue => props.onChange(itemValue)}
      style={style.button}
    >
      {Object.keys(props.options).map(locale => (
        <Picker.Item label={props.options[locale]} value={locale} />
      ))}
    </Picker>
  </View>
);

const style = StyleSheet.create({
  button: {
    marginBottom: 10,
    color: '#fff',
    width: 100,
  },
});
