import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import Home from './screens/Home'
import Follow from './screens/Follow';

const mainNavigator = createStackNavigator(
  {
  Home: { screen: Home },
  Follow: { screen: Follow },
  },
  { 
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#BA2F16'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
)

const App = createAppContainer(mainNavigator)

export default App