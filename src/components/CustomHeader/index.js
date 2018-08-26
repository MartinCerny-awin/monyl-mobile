// @flow
import React from 'react';
import { Image } from 'react-native';
import {
  Icon, Button, Left, Right, Body, Header,
} from 'native-base';

import styles from './styles';

type Props = {
  navigation: () => void,
  hasTabs?: boolean,
};

const CustomHeader = (props: Props) => {
  const { navigation } = props;
  return (
    <Header hasTabs={props.hasTabs}>
      <Left>
        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Icon active name="menu" />
        </Button>
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
