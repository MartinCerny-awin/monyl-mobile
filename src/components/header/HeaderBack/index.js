// @flow
import React from 'react';
import { Title, Icon, Button, Left, Right, Body, Header } from 'native-base';

import styles from './styles';

type Props = {
  action: () => void,
  hasTabs?: boolean,
  title?: string,
};

const CustomHeader = (props: Props) => (
  <Header hasTabs={props.hasTabs}>
    <Left>
      <Button transparent onPress={props.action}>
        <Icon active name="arrow-back" style={styles.headerIcons} />
      </Button>
    </Left>
    <Body style={styles.body}>
      <Title>{props.title}</Title>
    </Body>
    <Right />
  </Header>
);

CustomHeader.defaultProps = {
  hasTabs: false,
  title: '',
};

export default CustomHeader;
