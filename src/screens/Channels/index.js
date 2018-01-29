// @flow
import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Tabs,
  Tab,
  Text,
  TabHeading,
} from 'native-base';

import styles from './styles';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';

const headerLogo = require('../../../assets/header-logo.png');

type Props = {
  navigation: () => void,
};

const Channels = (props: Props) => (
  <Container>
    <Header hasTabs>
      <Left>
        <Button transparent onPress={() => props.navigation.navigate('DrawerOpen')}>
          <Icon active name="menu" />
        </Button>
      </Left>
      <Body>
        <Image source={headerLogo} style={styles.imageHeader} />
      </Body>
      <Right />
    </Header>
    <Tabs style={{ backgroundColor: '#fff' }}>
      <Tab
        heading={
          <TabHeading>
            <Text>Following</Text>
          </TabHeading>
        }
      >
        <TabOne navigation={props.navigation} />
      </Tab>
      <Tab heading="Popular">
        <TabTwo navigation={props.navigation} />
      </Tab>
      <Tab heading="Explore">
        <TabThree navigation={props.navigation} />
      </Tab>
    </Tabs>
  </Container>
);

export default Channels;
