// @flow
import React, { Component } from 'react';
import {
  Container, Content, Text, Button, Icon, Item, Input, View,
} from 'native-base';

import styles from './styles';
import CustomHeader from '../../components/CustomHeader';

// const headerLogo = require("../../../assets/header-logo.png");
const primary = require('../../theme/variables/commonColor').brandPrimary;

type Props = {
  navigation: () => void,
};
type State = {
  offset: {
    x: number,
    y: number,
  },
};
class Feedback extends Component<Props, State> {
  state = {
    offset: {
      x: 0,
      y: 0,
    },
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container style={{ backgroundColor: '#FFF' }}>
        <CustomHeader hasTabs navigation={navigation} />
        <Content
          showsVerticalScrollIndicator={false}
          contentOffset={this.state.offset}
          scrollEnabled={false}
        >
          <View style={styles.bg}>
            <View style={styles.contentIconsContainer}>
              <Button transparent style={styles.roundedButton}>
                <Icon name="ios-call-outline" style={{ fontSize: 30, width: 30, color: '#FFF' }} />
              </Button>
              <Button transparent style={styles.roundedCustomButton}>
                <Icon
                  name="ios-mail-outline"
                  style={{
                    fontSize: 28,
                    color: primary,
                    width: 22,
                    marginLeft: 5,
                  }}
                />
              </Button>
              <Button transparent style={styles.roundedButton}>
                <Icon name="ios-pin-outline" style={{ fontSize: 28, width: 30, color: '#FFF' }} />
              </Button>
            </View>
            <View style={styles.feedbackHeaderContainer}>
              <Text style={styles.feedbackHeader}>SEND FEEDBACK</Text>
              <Text note style={styles.feedbackHead}>
                Your feedback is very important to us.
              </Text>
            </View>
          </View>

          <View style={styles.feedbackContainer}>
            <Item rounded style={styles.inputGrp}>
              <Icon name="ios-mail-outline" style={{ color: 'rgba(0,0,0,0.5)', marginTop: 3 }} />
              <Input
                placeholder="Email"
                placeholderTextColor="rgba(0,0,0,0.3)"
                style={styles.input}
              />
            </Item>

            <Item regular style={{ marginTop: 10 }}>
              <Input
                placeholder="Write something..."
                placeholderTextColor="rgba(0,0,0,0.5)"
                style={styles.inputBox}
                multiline
                returnKeyType="default"
              />
            </Item>
            <Button style={{ alignSelf: 'flex-end', marginTop: 10, height: 40 }}>
              <Text>Send</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Feedback;
