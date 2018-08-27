// @flow
import React from 'react';
import { Image, Platform } from 'react-native';
import {
  Container,
  Header,
  Content,
  Text,
  Left,
  Right,
  Body,
  Button,
  Icon,
  View,
  Grid,
  Col,
} from 'native-base';
import type { NavigationScreenProp } from 'react-navigation';

import ProgressBar from '../../components/ProgressBar/ProgressBar';

import styles from './styles';

const headerLogo = require('../../../assets/header-logo.png');

type Props = {
  navigation: NavigationScreenProp<{}>,
};
const Overview = (props: Props) => {
  const { navigation: { openDrawer } } = props;
  const primary = require('../../theme/variables/commonColor').brandPrimary;
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
      <View style={styles.overviewHeaderContainer}>
        <Text style={styles.overviewHeader}>OVERVIEW</Text>
        <Text note style={styles.overviewHead}>
          What you are reading the most
        </Text>
      </View>

      <Content showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff' }}>
        <View style={styles.overviewContent}>
          <View style={styles.overviewTopicsBox}>
            <Grid style={Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }}>
              <Col>
                <Text style={styles.overviewInfoHeader}>FASHION</Text>
              </Col>
              <Col>
                <Text style={styles.overviewInfoPerc}>26%</Text>
              </Col>
            </Grid>
            <ProgressBar color={primary} progress={34} />
          </View>

          <View style={styles.overviewTopicsBox}>
            <Grid style={Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }}>
              <Col>
                <Text style={styles.overviewInfoHeader}>ENVIRONMENT</Text>
              </Col>
              <Col>
                <Text style={styles.overviewInfoPerc}>20%</Text>
              </Col>
            </Grid>
            <ProgressBar color={primary} progress={28} />
          </View>

          <View style={styles.overviewTopicsBox}>
            <Grid style={Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }}>
              <Col>
                <Text style={styles.overviewInfoHeader}>TECHNOLOGY</Text>
              </Col>
              <Col>
                <Text style={styles.overviewInfoPerc}>15%</Text>
              </Col>
            </Grid>
            <ProgressBar color={primary} progress={12} />
          </View>

          <View style={styles.overviewTopicsBox}>
            <Grid style={Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }}>
              <Col>
                <Text style={styles.overviewInfoHeader}>AUTO</Text>
              </Col>
              <Col>
                <Text style={styles.overviewInfoPerc}>12%</Text>
              </Col>
            </Grid>
            <ProgressBar color={primary} progress={10} />
          </View>

          <View style={styles.overviewTopicsBox}>
            <Grid style={Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }}>
              <Col>
                <Text style={styles.overviewInfoHeader}>EDUCATION</Text>
              </Col>
              <Col>
                <Text style={styles.overviewInfoPerc}>9%</Text>
              </Col>
            </Grid>
            <ProgressBar color={primary} progress={8} />
          </View>

          <View style={styles.overviewTopicsBox}>
            <Grid style={Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }}>
              <Col>
                <Text style={styles.overviewInfoHeader}>SCIENCE</Text>
              </Col>
              <Col>
                <Text style={styles.overviewInfoPerc}>7%</Text>
              </Col>
            </Grid>
            <ProgressBar color={primary} progress={5} />
          </View>

          <View style={styles.overviewTopicsBox}>
            <Grid style={Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }}>
              <Col>
                <Text style={styles.overviewInfoHeader}>SPORTS</Text>
              </Col>
              <Col>
                <Text style={styles.overviewInfoPerc}>5%</Text>
              </Col>
            </Grid>
            <ProgressBar color={primary} progress={3} />
          </View>

          <View style={styles.overviewTopicsBox}>
            <Grid style={Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }}>
              <Col>
                <Text style={styles.overviewInfoHeader}>FINANCE</Text>
              </Col>
              <Col>
                <Text style={styles.overviewInfoPerc}>3%</Text>
              </Col>
            </Grid>
            <ProgressBar color={primary} progress={5} />
          </View>

          <View style={styles.overviewTopicsBox}>
            <Grid style={Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }}>
              <Col>
                <Text style={styles.overviewInfoHeader}>ART</Text>
              </Col>
              <Col>
                <Text style={styles.overviewInfoPerc}>2%</Text>
              </Col>
            </Grid>
            <ProgressBar color={primary} progress={3} />
          </View>

          <View style={styles.overviewTopicsBox}>
            <Grid style={Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }}>
              <Col>
                <Text style={styles.overviewInfoHeader}>ANIMATION</Text>
              </Col>
              <Col>
                <Text style={styles.overviewInfoPerc}>1%</Text>
              </Col>
            </Grid>
            <ProgressBar color={primary} progress={3} />
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Overview;
