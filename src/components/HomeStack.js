import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import Header from './Header';
import Login from '../screens/login';
import Profile from '../screens/profile';
import PjComletion from '../screens/pjCompletion';
import JReceipt from '../screens/jReceipt';
import RSmartCard from '../screens/rSmartCard';

const screens = {
  Home: {
    screen: Profile,
    navigationOptions: {
      headerTitle: () => <Header title="SHUTTLE HOME" />,
    },
  },
  Reciept: {
    screen: JReceipt,
    navigationOptions: {
      headerTitle: () => <Header title="TICKET DETAILS" />,
    },
  },
  PjComletion: {
    screen: PjComletion,
    navigationOptions: {
      headerTitle: () => <Header title="SHUTTLE HOME" />,
    },
  },
  topUP: {
    screen: RSmartCard,
    navigationOptions: {
      headerTitle: () => <Header title="SHUTTLE HOME" />,
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#2553A8', height: 60},
  },
});

export default createAppContainer(HomeStack);
