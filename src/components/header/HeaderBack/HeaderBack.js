// @flow

import React from 'react';
import {
  Title, Icon, Button, Left, Right, Body, Header,
} from 'native-base';
import type { NavigationScreenProp } from 'react-navigation';

import styles from './styles';

type Props = {
  navigation: NavigationScreenProp<{}>,
  title?: string,
};

class CustomHeader extends React.Component<Props> {
  static defaultProps = {
    title: '',
  };

  navigateBack = () => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.navigateBack}>
            <Icon active name="arrow-back" />
          </Button>
        </Left>
        <Body style={styles.body}>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default CustomHeader;
