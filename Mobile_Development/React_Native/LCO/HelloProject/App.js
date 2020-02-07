import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import NameText_s from './src/components/NameText_s.js'

export default class App extends React.Component
{
  render()
  {
    return (        // it can only return one Tag (which can contain more inside)
      <View style={styles.container} >
        <NameText_s name='Rishabh Saxena' />
        <Image source={require('./src/images/email.png')} />
        <Image source={{uri: 'https://bit.ly/2RibjnA'}} style={ {width: 300, height: 200}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                        // TODO: lean about flex
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})