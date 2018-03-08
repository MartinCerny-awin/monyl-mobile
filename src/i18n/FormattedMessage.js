import React, { Component } from 'react';
import { Text } from 'react-native';
import I18n from './i18n';

class FormattedMessage extends Component {
  render() {
    return (
      <Text style={{...styles.textStyle, ...this.props.style}}>
        {I18n.t(this.props.id, {defaultValue: this.props.defaultMessage})}
      </Text>
    )
  }
}

const styles = {
  textStyle: {
    color: '#00BEE0',
    fontSize: 16,
    fontWeight: 'bold',
  }
};

export default FormattedMessage;
