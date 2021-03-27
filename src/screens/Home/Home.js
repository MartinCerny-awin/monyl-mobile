// @flow

/* eslint no-underscore-dangle: 0 */

import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Left,
  Body,
  Button,
  Icon,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  View,
} from 'native-base';
import { Trans } from '@lingui/macro';
import type { DeckSwiper as DeckSwiperFlowType } from 'native-base';
import type { NavigationScreenProp } from 'react-navigation';

import CustomHeader from '../../components/header/CustomHeader';

type Props = {
  navigation: NavigationScreenProp<{}>,
};

class Home extends React.Component<Props> {
  customDeckSwiper: DeckSwiperFlowType

  render() {
    const data = require('./data').default;
    const { navigation } = this.props;
    return (
      <Container>
        <CustomHeader hasTabs navigation={navigation} />

        <View style={{ height: 450 }}>
          <DeckSwiper
            ref={(c) => { this.customDeckSwiper = c; }}
            dataSource={data}
            renderItem={item => (
              <Card style={{ elevation: 5 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>{item.note}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 10 }}>
          <Button onPress={() => this.customDeckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Trans>Swipe Left</Trans>
          </Button>
          <Button onPress={() => this.customDeckSwiper._root.swipeRight()}>
            <Trans>Swipe Right</Trans>
            <Icon name="arrow-forward" />
          </Button>
        </View>

      </Container>
    );
  }
}

export default Home;
