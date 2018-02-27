import React, { Component } from 'react';
import { ActionSheetIOS, StyleSheet, Text, View } from 'react-native';
import type { intlShape } from 'redux-form';
import { injectIntl } from 'react-intl';

import commonMessages from '../../i18n/common';

type Props = {
  ...intlShape,
  currentOption: string,
  options: Array<string>,
  onChange: void,
};

class ActionSheet extends Component<Props> {
  showActionSheet = () => {
    const { options } = this.props;
    const values = Object.values(options);
    values.push(this.props.intl.formatMessage(commonMessages.cancel));
    const keys = Object.keys(options);

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: values,
        cancelButtonIndex: values.length - 1,
      },
      (buttonIndex) => {
        if (buttonIndex < values.length - 1) {
          this.props.onChange(keys[buttonIndex]);
        }
      },
    );
  };

  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet} style={style.button}>
          {this.props.currentOption}
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  button: {
    fontSize: 18,
    color: '#fff',
  },
});

export default injectIntl(ActionSheet);
