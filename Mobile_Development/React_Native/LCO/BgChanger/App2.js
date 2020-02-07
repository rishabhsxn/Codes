// lesson on Touchables in react native

import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';

export default class App extends React.Component 
{

  myButtonPressed()
  {
    Alert.alert('Logout')
  }
  myButtonPressed2()
  {
    Alert.alert('I clicked on the image!')
  }
  render()
  {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.myButtonPressed2}>
          <Image source={require('./src/images/email.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.myButtonPressed}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 10
  }
})
