import React from 'react';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Initial from './Initial';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Walkthrough from './Walkthrough';
import Story from './Story';
import Home from './Home';
import SideBar from './SideBar';
import Feedback from './Feedback';

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Feedback: { screen: Feedback },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />,
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
