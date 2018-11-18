import React from 'react';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Initial from './Initial';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Walkthrough from './Walkthrough';
import Story from './Story';
import Cards from './Cards';
import Sidebar from './Sidebar';
import Feedback from './Feedback';

const Drawer = createDrawerNavigator(
  {
    Cards: { screen: Cards },
    Feedback: { screen: Feedback },
  },
  {
    initialRouteName: 'Cards',
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
