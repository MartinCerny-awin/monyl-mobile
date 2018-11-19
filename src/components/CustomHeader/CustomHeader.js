// @flow

import React from 'react';
import { Image } from 'react-native';
import {
  Icon, Button, Left, Right, Body, Header,
} from 'native-base';
import type { NavigationScreenProp } from 'react-navigation';

import styles from './styles';

type Props = {
  navigation: NavigationScreenProp<{}>,
  hasTabs?: boolean,
};

const CustomHeader = (props: Props) => {
  const { navigation: { openDrawer } } = props;
  return (
    <Header hasTabs={props.hasTabs}>
      <Left>
        {openDrawer && (
          <Button transparent onPress={() => openDrawer()}>
            <Icon active name="menu" />
          </Button>
        )}
      </Left>
      <Body>
        <Image source={require('../../../assets/header-logo.png')} style={styles.imageHeader} />
      </Body>
      <Right />
    </Header>
  );
};

CustomHeader.defaultProps = {
  hasTabs: false,
};

export default CustomHeader;
