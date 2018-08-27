// @flow
import React, { Component } from 'react';
import {
  Image, ImageBackground, TouchableOpacity, ListView,
} from 'react-native';

import {
  Container,
  Content,
  Text,
  Thumbnail,
  View,
  List,
  ListItem,
  Button,
  Icon,
} from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import type { NavigationScreenProp } from 'react-navigation';

import CustomHeader from '../../components/CustomHeader';

import styles from './styles';
import data from './data';

type Props = {
  navigation: NavigationScreenProp<{}>,
};

type State = {
  listViewData: any,
};
class Profile extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  state = {
    listViewData: data,
  };

  ds: Object;

  deleteRow(secId: string, rowId: string, rowMap: any) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    // eslint-disable-next-line
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  render() {
    const { listViewData } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('../../../assets/bg-transparent.png')}
          style={styles.container}
        >
          <CustomHeader hasTabs navigation={navigation} />

          <View style={styles.profileInfoContainer}>
            <View style={{ alignSelf: 'center' }}>
              <Thumbnail
                source={require('../../../assets/Contacts/sanket.png')}
                style={styles.profilePic}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileUser}>Kumar Sanket</Text>
              <Text note style={styles.profileUserInfo}>
                CEO, GeekyAnts
              </Text>
            </View>
          </View>
          <Content showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff' }}>
            <View style={styles.linkTabs}>
              <Grid>
                <Col>
                  <View style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>13</Text>
                    <Text note style={styles.linkTabs_tabName}>
                      Comments
                    </Text>
                  </View>
                </Col>
                <Col>
                  <View style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>12</Text>
                    <Text note style={styles.linkTabs_tabName}>
                      Channels
                    </Text>
                  </View>
                </Col>
                <Col>
                  <View style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>52</Text>
                    <Text note style={styles.linkTabs_tabName}>
                      Bookmarks
                    </Text>
                  </View>
                </Col>
              </Grid>
            </View>

            {this.ds.cloneWithRows(listViewData).getRowCount() === 0 ? (
              <View style={styles.linkTabs}>
                <ListItem
                  style={{
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.textNote}>Empty List</Text>
                </ListItem>
              </View>
            ) : (
              <View>
                <View style={styles.linkTabs}>
                  <ListItem
                    style={{
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={styles.textNote}>Swipe the items to left and right</Text>
                  </ListItem>
                </View>
                <List
                  dataSource={this.ds.cloneWithRows(listViewData)}
                  renderRow={() => (
                    <ListItem
                      swipeList
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#FFF',
                      }}
                      onPress={() => navigation.navigate('Story')}
                    >
                      <Image source={data.url} style={styles.newsImage} />
                      <View style={styles.newsContent}>
                        <Text numberOfLines={2} style={styles.newsHeader}>
                          {data.headline}
                        </Text>
                        <Grid style={{ marginTop: 25 }}>
                          <Col>
                            <TouchableOpacity>
                              <Text style={styles.newsLink}>{data.link}</Text>
                            </TouchableOpacity>
                          </Col>
                          <Col>
                            <TouchableOpacity style={styles.newsTypeView}>
                              <Text style={styles.newsTypeText}>{data.category}</Text>
                            </TouchableOpacity>
                          </Col>
                        </Grid>
                      </View>
                    </ListItem>
                  )}
                  renderLeftHiddenRow={() => (
                    <Button full style={([styles.swipeBtn], { backgroundColor: '#CCC' })}>
                      <Icon active name="information-circle" style={{ fontSize: 35 }} />
                    </Button>
                  )}
                  renderRightHiddenRow={(secId, rowId, rowMap) => (
                    <Button
                      full
                      danger
                      onPress={() => this.deleteRow(secId, rowId, rowMap)}
                      style={styles.swipeBtn}
                    >
                      <Icon active name="trash" style={{ fontSize: 35 }} />
                    </Button>
                  )}
                  leftOpenValue={100}
                  rightOpenValue={-100}
                />
              </View>
            )}
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Profile;
