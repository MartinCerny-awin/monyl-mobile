// @flow

/* eslint no-underscore-dangle: 0 */

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
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  View,
} from 'native-base';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import type { DeckSwiper as DeckSwiperType } from 'native-base';
import type { NavigationScreenProp } from 'react-navigation';

import styles from './styles';
import data from './data';

const headerLogo = require('../../../assets/header-logo.png');

type Props = {
  navigation: NavigationScreenProp<{}>,
};

const messages = defineMessages({
  sunsetText: {
    id: 'screens.cards.data.sunsetText',
    defaultMessage: 'Sunset on Greece island',
  },
  rhodes: {
    id: 'screens.cards.data.rhodes',
    defaultMessage: 'Rhodes',
  },
  sunset: {
    id: 'screens.cards.data.sunset',
    defaultMessage: 'Sunset',
  },
  korean: {
    id: 'screens.cards.data.korean',
    defaultMessage: 'Korean girl',
  },
  koreanNP: {
    id: 'screens.cards.data.koreanNP',
    defaultMessage: 'Seoraksan National Park',
  },
  girl: {
    id: 'screens.cards.data.girl',
    defaultMessage: 'Girl',
  },
});

class Cards extends React.Component<Props> {
  customDeckSwiper: DeckSwiperType

  render() {
    const { intl, navigation: { openDrawer } } = this.props;
    return (
      <Container>
        <Header hasTabs>
          <Left>
            {openDrawer && (
            <Button transparent onPress={() => openDrawer()}>
              <Icon active name="menu" />
            </Button>
            )}
          </Left>
          <Body>
            <Image source={headerLogo} style={styles.imageHeader} />
          </Body>
          <Right />
        </Header>

        <View>
          <DeckSwiper
            ref={(c) => { this.customDeckSwiper = c; }}
            dataSource={data}
            renderItem={item => (
              <Card style={{ elevation: 5 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{intl.formatMessage(messages[item.text])}</Text>
                      <Text note>{intl.formatMessage(messages[item.note])}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{intl.formatMessage(messages[item.name])}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>

        <View style={{
          flexDirection: 'row', flex: 1, position: 'absolute', bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15,
        }}
        >
          <Button onPress={() => this.customDeckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <FormattedMessage
              id="screens.cards.swipeLeft"
              defaultMessage="Swipe Left"
            />
          </Button>
          <Button onPress={() => this.customDeckSwiper._root.swipeRight()}>
            <FormattedMessage
              id="screens.cards.swipeRight"
              defaultMessage="Swipe Right"
            />
            <Icon name="arrow-forward" />
          </Button>
        </View>

      </Container>
    );
  }
}

export default injectIntl(Cards);
