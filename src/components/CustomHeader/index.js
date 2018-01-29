// @flow
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Icon, Button, Left, Right, Body, Header } from 'native-base';

import styles from './styles';

type Props = {
  navigation: () => void,
  hasTabs?: boolean
};

class CustomHeader extends Component<Props> {
  render() {
    const navigation = this.props.navigation;
    return (
      <Header hasTabs={this.props.hasTabs}>
        <Left>
          <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
            <Icon active name="menu" />
          </Button>
        </Left>
        <Body>
          <Image
            source={require('../../../assets/header-logo.png')}
            style={styles.imageHeader}
          />
        </Body>
        <Right />
      </Header>
    );
  }
}

export default CustomHeader;
