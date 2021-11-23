import React from 'react';
import { StyleSheet,  View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import FbScreen from "./screens/fb.js";
import InScreen from './screens/in.js';


export default class App extends React.Component{
  render(){
    return (
    <AppContainer/> 
    ) 
  }
}
const TabNavigator = createBottomTabNavigator({
  FaceBook : {screen : FbScreen},
  InstaGram : {screen : InScreen}

});


const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
