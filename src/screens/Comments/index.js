// @flow
import React from 'react';
import { ImageBackground, View } from 'react-native';

import {
  Container,
  Header,
  Text,
  Input,
  Button,
  Icon,
  Body,
  Item,
  Tabs,
  Tab,
  Content,
} from 'native-base';
import type { NavigationScreenProp } from 'react-navigation';

import styles from './style';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';

const bg = require('../../../assets/bg-transparent.png');

type Props = {
  navigation: NavigationScreenProp<{}>,
};

const Comments = (props: Props) => (
  <Container>
    <ImageBackground source={bg} style={styles.container}>
      <Header style={styles.headerStyle}>
        <Body style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button transparent onPress={() => props.navigation.goBack(null)}>
            <Icon active name="arrow-back" style={styles.headerIcons} />
          </Button>
          <Button transparent>
            <Icon name="chatboxes" style={styles.headerIcons} />
          </Button>
          <Button transparent>
            <Text style={styles.headerTextIcon}>Aa</Text>
          </Button>
          <Button transparent>
            <Icon name="bookmarks" style={styles.headerIcons} />
          </Button>
          <Button transparent>
            <Icon name="download" style={styles.headerIcons} />
          </Button>
        </Body>
      </Header>
      <Content
        scrollEnabled={false}
        extraScrollHeight={-13}
        contentContainerStyle={styles.commentHeadbg}
      >
        <Text style={styles.commentHeader}>23 COMMENTS</Text>
        <Tabs style={{ backgroundColor: '#fff' }}>
          <Tab heading="Best">
            <TabOne />
          </Tab>
          <Tab heading="Newest">
            <TabTwo />
          </Tab>
          <Tab heading="Oldest">
            <TabThree />
          </Tab>
        </Tabs>

        <View style={styles.commentBox}>
          <Item style={{ alignItems: 'center' }}>
            <Icon name="ios-attach" style={styles.attachIcon} />
            <Input
              placeholder="Write something..."
              placeholderTextColor="#797979"
              style={styles.input}
            />
            <Button transparent small style={{ alignSelf: 'center' }}>
              <Text style={{ fontWeight: '600' }}>Send</Text>
            </Button>
          </Item>
        </View>
      </Content>
    </ImageBackground>
  </Container>
);

export default Comments;
