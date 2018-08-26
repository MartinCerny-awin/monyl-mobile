// @flow
import React from 'react';
import {
  Title, Icon, Button, Left, Right, Body, Header,
} from 'native-base';

import styles from './styles';

type Props = {
  navigation: () => void,
  title?: string,
};

class CustomHeader extends React.Component<Props> {
  static defaultProps = {
    title: '',
  };

  navigateBack = () => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.navigateBack}>
            <Icon active name="arrow-back" style={styles.headerIcons} />
          </Button>
        </Left>
        <Body style={styles.body}>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default CustomHeader;
