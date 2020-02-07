// Lesson on buttons

import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component 
{
  render()
  {
    return (
      <View style={styles.container}>
        <Button
          title="Login"
          onPress= {() => {
            Alert.alert('Logout')
          }}
        />
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
});
