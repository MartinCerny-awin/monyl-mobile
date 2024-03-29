import * as React from 'react';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Initial from './Initial';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Walkthrough from './Walkthrough';
import Home from './Home';
import SideBar from '../components/menu/SideBar';

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
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
    Drawer: { screen: Drawer },
  },
  {
    index: 0,
    initialRouteName: 'Initial',
    headerMode: 'none',
  },
);

export default Navigator;
