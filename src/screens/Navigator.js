import React from 'react';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Initial from './Initial';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import Walkthrough from './Walkthrough';
import Story from './Story';
import Channels from './Channels';
import Sidebar from './Sidebar';
import Feedback from './Feedback';

const Drawer = createDrawerNavigator(
  {
    Channels: { screen: Channels },
    Feedback: { screen: Feedback },
  },
  {
    initialRouteName: 'Channels',
    contentComponent: props => <Sidebar {...props} />,
  },
);

const Navigator = createStackNavigator(
  {
    Initial: { screen: Initial },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ForgotPassword: { screen: ForgotPassword },
    Walkthrough: { screen: Walkthrough },
    Story: { screen: Story },
    Drawer: { screen: Drawer },
  },
  {
    index: 0,
    initialRouteName: 'Initial',
    headerMode: 'none',
  },
);

export default Navigator;
