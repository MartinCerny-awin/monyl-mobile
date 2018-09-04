// @flow

import React from 'react';
import { Platform, Dimensions, View } from 'react-native';
import {
  Container, Content, Text, Button, Icon,
} from 'native-base';
import Carousel from 'react-native-carousel-view';
import { defineMessages } from 'react-intl';
import type { IntlShape } from 'react-intl';
import type { NavigationScreenProp } from 'react-navigation';

import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

type Props = {
  navigation: NavigationScreenProp<{}>,
  intl: IntlShape,
}

const messages = defineMessages({
  firstScreen: {
    id: 'screens.walkthrough.firstScreen',
    defaultMessage: 'Join us in Monyl. The app of a future.',
  },
  secondScreen: {
    id: 'screens.walkthrough.secondScreen',
    defaultMessage: 'Everything is synchronized into the cloud. There is nothing to worry about.',
  },
  thirdScreen: {
    id: 'screens.walkthrough.thirdScreen',
    defaultMessage: 'Just one swipe and you are with us.',
  },
  skip: {
    id: 'screens.walkthrough.skip',
    defaultMessage: 'SKIP TOUR',
  },
  continue: {
    id: 'screens.walkthrough.continue',
    defaultMessage: 'CONTINUE TO APP',
  },
});

class Walkthrough extends React.PureComponent<Props> {
  render() {
    const { navigation, intl } = this.props;

    return (
      <Container>
        <Content>
          <Carousel
            width={deviceWidth}
            height={deviceHeight}
            loop={false}
            indicatorAtBottom
            indicatorOffset={deviceHeight / 15}
            indicatorSize={Platform.OS === 'android' ? 15 : 10}
            indicatorColor="#FFF"
            animate={false}
          >
            <View style={styles.slides}>
              <Icon name="ios-thumbs-up-outline" style={styles.imageIcons} />
              <View>
                <Text numberOfLines={3} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                  {intl.formatMessage(messages.firstScreen)}
                </Text>
              </View>
              <Button
                transparent
                rounded
                onPress={() => navigation.navigate('Drawer')}
                style={styles.Button}
              >
                <Text style={{ color: '#FFF', fontWeight: '600' }}>
                  {intl.formatMessage(messages.skip)}
                </Text>
              </Button>
            </View>

            <View style={styles.slides}>
              <Icon name="md-cloud-done" style={styles.imageIcons} />
              <Text numberOfLines={3} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                {intl.formatMessage(messages.secondScreen)}
              </Text>
              <Button
                transparent
                rounded
                onPress={() => navigation.navigate('Drawer')}
                style={styles.Button}
              >
                <Text style={{ color: '#FFF', fontWeight: '600' }}>
                  {intl.formatMessage(messages.skip)}
                </Text>
              </Button>
            </View>

            <View style={styles.slides}>
              <Icon name="ios-speedometer-outline" style={styles.imageIcons} />
              <Text numberOfLines={3} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                {intl.formatMessage(messages.thirdScreen)}
              </Text>
              <Button
                transparent
                rounded
                onPress={() => navigation.navigate('Drawer')}
                style={styles.Button}
              >
                <Text style={{ color: '#FFF', fontWeight: '600' }}>
                  {intl.formatMessage(messages.continue)}
                </Text>
              </Button>
            </View>
          </Carousel>
        </Content>
      </Container>
    );
  }
}

export default Walkthrough;
