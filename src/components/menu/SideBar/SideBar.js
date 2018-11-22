// @flow

import React from 'react';
import { ImageBackground } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Trans } from '@lingui/macro';
import {
  Text, Container, Content, Icon, ListItem,
} from 'native-base';
import type { NavigationScreenProp } from 'react-navigation';

import styles from './style';

const resetAction = StackActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: 'Login' })],
});

type Props = {
  navigation: NavigationScreenProp<{}>,
};

const SideBar = (props: Props) => {
  const { navigation } = props;
  return (
    <Container>
      <ImageBackground
        style={styles.background}
      >
        <Content style={styles.drawerContent}>
          <ListItem
            button
            onPress={() => {
              navigation.navigate('Home');
            }}
            iconLeft
            style={styles.links}
          >
            <Icon name="ios-home-outline" style={styles.linkIcon} />
            <Trans>
              <Text style={styles.linkText}>HOME</Text>
            </Trans>
          </ListItem>
          <ListItem
            button
            onPress={() => {
              navigation.dispatch(resetAction);
            }}
            style={styles.links}
          >
            <Icon name="ios-close-circle-outline" style={styles.linkIcon} />
            <Trans>
              <Text style={styles.linkText}>LOG OUT</Text>
            </Trans>
          </ListItem>
        </Content>
      </ImageBackground>
    </Container>
  );
};

export default SideBar;
