// @flow

import React from 'react';
import { Platform, Dimensions, View } from 'react-native';
import {
  Container, Content, Text, Button, Icon,
} from 'native-base';
import Carousel from 'react-native-carousel-view';
import type { NavigationScreenProp } from 'react-navigation';

import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

type Props = {
  navigation: NavigationScreenProp<{}>,
};

class Walkthrough extends React.PureComponent<Props> {
  render() {
    const { navigation } = this.props;

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
              <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
            Join us in Monyl. The app of a future.
              </Text>
              <Button
                transparent
                rounded
                onPress={() => navigation.navigate('Drawer')}
                style={styles.Button}
              >
                <Text style={{ color: '#FFF', fontWeight: '600' }}>SKIP TOUR</Text>
              </Button>
            </View>

            <View style={styles.slides}>
              <Icon name="md-cloud-done" style={styles.imageIcons} />
              <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
            Sharia compliant bank that will fit your needs.
              </Text>
              <Button
                transparent
                rounded
                onPress={() => navigation.navigate('Drawer')}
                style={styles.Button}
              >
                <Text style={{ color: '#FFF', fontWeight: '600' }}>SKIP TOUR</Text>
              </Button>
            </View>

            <View style={styles.slides}>
              <Icon name="ios-speedometer-outline" style={styles.imageIcons} />
              <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
            Just one swipe and you are with us.
              </Text>
              <Button
                transparent
                rounded
                onPress={() => navigation.navigate('Drawer')}
                style={styles.Button}
              >
                <Text style={{ color: '#FFF', fontWeight: '600' }}>CONTINUE TO APP</Text>
              </Button>
            </View>
          </Carousel>
        </Content>
      </Container>
    );
  }
}

export default Walkthrough;
