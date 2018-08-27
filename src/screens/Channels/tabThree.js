// @flow
import React from 'react';
import { ImageBackground, TouchableOpacity, Platform } from 'react-native';
import { Content, Text, View } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import type { NavigationScreenProp } from 'react-navigation';

import styles from './styles';

type Props = {
  navigation: NavigationScreenProp<{}>,
};

const TabThree = (props: Props) => {
  const { navigation } = props;
  return (
    <Content showsVerticalScrollIndicator={false}>
      <View>
        <Grid>
          <Row>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Channel')}>
                <ImageBackground
                  source={require('../../../assets/NewsIcons/11.jpg')}
                  style={styles.channelImg}
                >
                  <Text
                    style={
                      Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText
                    }
                  >
                    SPORTS
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Channel')}>
                <ImageBackground
                  source={require('../../../assets/NewsIcons/12.jpg')}
                  style={styles.channelImg}
                >
                  <Text
                    style={
                      Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText
                    }
                  >
                    ART
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Channel')}>
                <ImageBackground
                  source={require('../../../assets/NewsIcons/8.jpg')}
                  style={styles.channelImg}
                >
                  <Text
                    style={
                      Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText
                    }
                  >
                    AUTO
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Channel')}>
                <ImageBackground
                  source={require('../../../assets/NewsIcons/7.jpg')}
                  style={styles.channelImg}
                >
                  <Text
                    style={
                      Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText
                    }
                  >
                    TECHNOLOGY
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Channel')}>
                <ImageBackground
                  source={require('../../../assets/NewsIcons/6.jpg')}
                  style={styles.channelImg}
                >
                  <Text
                    style={
                      Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText
                    }
                  >
                    FINANCES
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Channel')}>
                <ImageBackground
                  source={require('../../../assets/NewsIcons/1.jpg')}
                  style={styles.channelImg}
                >
                  <Text
                    style={
                      Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText
                    }
                  >
                    ENVIRONMENT
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Channel')}>
                <ImageBackground
                  source={require('../../../assets/NewsIcons/9.jpg')}
                  style={styles.channelImg}
                >
                  <Text
                    style={
                      Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText
                    }
                  >
                    FASHION
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Channel')}>
                <ImageBackground
                  source={require('../../../assets/NewsIcons/2.jpg')}
                  style={styles.channelImg}
                >
                  <Text
                    style={
                      Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText
                    }
                  >
                    SCIENCE
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Channel')}>
                <ImageBackground
                  source={require('../../../assets/NewsIcons/10.jpg')}
                  style={styles.channelImg}
                >
                  <Text
                    style={
                      Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText
                    }
                  >
                    ANIMATION
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Channel')}>
                <ImageBackground
                  source={require('../../../assets/NewsIcons/13.jpg')}
                  style={styles.channelImg}
                >
                  <Text
                    style={
                      Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText
                    }
                  >
                    EDUCATION
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      </View>
    </Content>
  );
};

export default TabThree;
