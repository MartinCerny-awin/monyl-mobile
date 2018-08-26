// @flow

import React, { Component } from 'react';
import {
  Image, Switch, TouchableOpacity, Platform,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Thumbnail,
  Item,
  Input,
  View,
  Left,
  Right,
  Body,
} from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import styles from './styles';

const Color = require('color');

const headerLogo = require('../../../assets/header-logo.png');
const primary = require('../../theme/variables/commonColor').brandPrimary;

const light = Color(primary).alpha(0.3);

type Props = {
  navigation: () => void,
};

type State = {
  monSwitch: boolean,
  tueSwitch: boolean,
  wedSwitch: boolean,
  thuSwitch: boolean,
  friSwitch: boolean,
  satSwitch: boolean,
  sunSwitch: boolean,
};

class Settings extends Component<Props, State> {
  state = {
    monSwitch: true,
    tueSwitch: false,
    wedSwitch: false,
    thuSwitch: false,
    friSwitch: false,
    satSwitch: false,
    sunSwitch: false,
  };

  render() {
    const {
      monSwitch,
      tueSwitch,
      wedSwitch,
      thuSwitch,
      friSwitch,
      satSwitch,
      sunSwitch,
    } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
              <Icon active name="menu" />
            </Button>
          </Left>
          <Body>
            <Image source={headerLogo} style={styles.imageHeader} />
          </Body>
          <Right />
        </Header>
        <Content showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.signupHeader}>SETTINGS</Text>
            <View style={styles.profileButtons}>
              <Button transparent style={styles.roundedButton}>
                <Icon
                  name="cloud-upload"
                  style={
                    Platform.OS === 'android'
                      ? { color: '#FFF', width: 23 }
                      : { color: '#FFF', width: 22 }
                  }
                />
              </Button>
              <TouchableOpacity style={{ alignSelf: 'center' }}>
                <Thumbnail
                  source={require('../../../assets/Contacts/sanket.png')}
                  style={styles.profilePic}
                />
              </TouchableOpacity>
              <Button transparent style={styles.roundedButton}>
                <Icon
                  name="cloud-download"
                  style={
                    Platform.OS === 'android'
                      ? { color: '#FFF', width: 23 }
                      : { lineHeight: 0, color: '#FFF', width: 22 }
                  }
                />
              </Button>
            </View>
          </View>

          <View style={styles.bg}>
            <View style={styles.signupContainer}>
              <Item rounded style={styles.inputGrp}>
                <Icon name="ios-person-outline" />
                <Input
                  placeholder="Username"
                  placeholderTextColor="rgba(255,255,255,0.6)"
                  style={styles.input}
                />
              </Item>
              <Item rounded style={styles.inputGrp}>
                <Icon name="ios-mail-open-outline" />
                <Input
                  placeholder="Email"
                  placeholderTextColor="rgba(255,255,255,0.6)"
                  style={styles.input}
                />
              </Item>
              <Item rounded style={styles.inputGrp}>
                <Icon name="ios-unlock-outline" />
                <Input
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,0.6)"
                  secureTextEntry
                  style={styles.input}
                />
              </Item>
            </View>
          </View>
          <View style={styles.notificationSwitchContainer}>
            <Text style={styles.notificationHeader}>EMAIL NOTIFICATIONS</Text>
            <View>
              <Grid style={styles.child}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>
                    Monday
                  </Text>
                </Col>
                <Col
                  style={
                    Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer
                  }
                >
                  <Switch
                    onValueChange={value => this.setState({ monSwitch: value })}
                    onTintColor={light}
                    style={styles.switch}
                    thumbTintColor={primary}
                    tintColor={primary}
                    value={monSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={styles.child}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>
                    Tuesday
                  </Text>
                </Col>
                <Col
                  style={
                    Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer
                  }
                >
                  <Switch
                    onValueChange={value => this.setState({ tueSwitch: value })}
                    onTintColor={light}
                    style={styles.switch}
                    thumbTintColor={primary}
                    tintColor={primary}
                    value={tueSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={styles.child}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>
                    Wednesday
                  </Text>
                </Col>
                <Col
                  style={
                    Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer
                  }
                >
                  <Switch
                    onValueChange={value => this.setState({ wedSwitch: value })}
                    onTintColor={light}
                    style={styles.switch}
                    thumbTintColor={primary}
                    tintColor={primary}
                    value={wedSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={styles.child}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>
                    Thursday
                  </Text>
                </Col>
                <Col
                  style={
                    Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer
                  }
                >
                  <Switch
                    onValueChange={value => this.setState({ thuSwitch: value })}
                    onTintColor={light}
                    style={styles.switch}
                    thumbTintColor={primary}
                    tintColor={primary}
                    value={thuSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={styles.child}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>
                    Friday
                  </Text>
                </Col>
                <Col
                  style={
                    Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer
                  }
                >
                  <Switch
                    onValueChange={value => this.setState({ friSwitch: value })}
                    onTintColor={light}
                    style={styles.switch}
                    thumbTintColor={primary}
                    tintColor={primary}
                    value={friSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={styles.child}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>
                    Saturday
                  </Text>
                </Col>
                <Col
                  style={
                    Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer
                  }
                >
                  <Switch
                    onValueChange={value => this.setState({ satSwitch: value })}
                    onTintColor={light}
                    style={styles.switch}
                    thumbTintColor={primary}
                    tintColor={primary}
                    value={satSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={styles.child}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>
                    Sunday
                  </Text>
                </Col>
                <Col
                  style={
                    Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer
                  }
                >
                  <Switch
                    onValueChange={value => this.setState({ sunSwitch: value })}
                    onTintColor={light}
                    style={styles.switch}
                    thumbTintColor={primary}
                    tintColor={primary}
                    value={sunSwitch}
                  />
                </Col>
              </Grid>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Settings;
