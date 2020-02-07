import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

export default class App extends React.Component {
  render(){
    return (
      <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
        <View style={{height:100, width:100, backgroundColor:'#2475B0'}} />
        <View style={{height:100, width:100, backgroundColor:'#6ab04c'}} />
        <View style={{height:100, width:100, backgroundColor:'#F3B63A'}} />
      </View>
    )
  }
}
