import React from 'react';
import {Text, View} from 'react-native';
//import Login from './src/components/login';
import Login from './src/screens/login';
import Profile from './src/screens/profile';
import PjComletion from './src/screens/pjCompletion';
import JReceipt from './src/screens/jReceipt';
import RSmartCard from './src/screens/rSmartCard';
import Navigator from './src/components/HomeStack';

const App = (props) => {
  return (
    <>
  <Navigator/>
  </>
  )
}
export default App;