import React from 'react';

import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Initial from './Initial';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import Walkthrough from './Walkthrough';
import Comments from './Comments';
import Channel from './Channel';
import Story from './Story';
import Home from './Home';
import Channels from './Channels';
import Sidebar from './Sidebar';
import Overview from './Overview';
import Calendar from './Calendar';
import Timeline from './Timeline';
import Feedback from './Feedback';
import Profile from './Profile';
import Settings from './Settings';

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Channels: { screen: Channels },
    Overview: { screen: Overview },
    Calendar: { screen: Calendar },
    Timeline: { screen: Timeline },
    Feedback: { screen: Feedback },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <Sidebar {...props} />,
  },
);

const Navigator = StackNavigator(
  {
    Initial: { screen: Initial },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ForgotPassword: { screen: ForgotPassword },
    Walkthrough: { screen: Walkthrough },
    Story: { screen: Story },
    Comments: { screen: Comments },
    Channel: { screen: Channel },
    Drawer: { screen: Drawer },
  },
  {
    index: 0,
    initialRouteName: 'Initial',
    headerMode: 'none',
  },
);

export default Navigator;
