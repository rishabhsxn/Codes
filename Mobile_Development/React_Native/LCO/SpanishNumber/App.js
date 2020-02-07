import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Dimensions,
ScrollView } from 'react-native'
import { Audio } from 'expo-av'

const listBackgroundColors = {
  1: "#3498DB",
  2: "#E8290B",
  3: "#AE1438",
  4: "#2475B0",
  5: "#30336B",
  6: "#0A3D62",
  7: "#26ae60",
  8: "#10A881",
  9: "#218F76",
  10: "#DFAF2B"
}

const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav'),
}


export default class App extends React.Component
{
  // write a function to play sound
  playSound = async (number) =>
  {
    const soundObject = new Audio.Sound()
    try
    {
      let path = soundList[number]
      await soundObject.loadAsync(path)
      await soundObject
      .playAsync()
      .then( async playbackStatus => {
        setTimeout( () => {
          soundObject.unloadAsync()
        }, playbackStatus.playableDurationMillis)
      })
      .catch( error => { console.log(error) })
    }
    catch(error)
    {
      console.log(error)
    }
  }

  chooseColor = itemNumber => 
  {
    return listBackgroundColors[itemNumber]
  }

  render()
  {
    return (
      <SafeAreaView style={styles.fullScreen}>
        <View style={styles.screen}>
          <Image source={require('./assets/logo.png')} style={ {marginTop: 10} }/>
          <ScrollView style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, {backgroundColor: this.chooseColor(1)}]}
              onPress={ () => { this.playSound('one') } }
            >
              <Text style={styles.buttonText}>One</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, {backgroundColor: this.chooseColor(2)}]}
              onPress={ () => { this.playSound('two') } }
            >
              <Text style={styles.buttonText}>Two</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, {backgroundColor: this.chooseColor(3)}]}
              onPress={ () => { this.playSound('three') } }
            >
              <Text style={styles.buttonText}>Three</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, {backgroundColor: this.chooseColor(4)}]}
              onPress={ () => { this.playSound('four') } }
            >
              <Text style={styles.buttonText}>Four</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, {backgroundColor: this.chooseColor(5)}]}
              onPress={ () => { this.playSound('five') } }
            >
              <Text style={styles.buttonText}>Five</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, {backgroundColor: this.chooseColor(6)}]}
              onPress={ () => { this.playSound('six') } }
            >
              <Text style={styles.buttonText}>six</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, {backgroundColor: this.chooseColor(7)}]}
              onPress={ () => { this.playSound('seven') } }
            >
              <Text style={styles.buttonText}>Seven</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, {backgroundColor: this.chooseColor(8)}]}
              onPress={ () => { this.playSound('eight') } }
            >
              <Text style={styles.buttonText}>Eight</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, {backgroundColor: this.chooseColor(9)}]}
              onPress={ () => { this.playSound('nine') } }
            >
              <Text style={styles.buttonText}>Nine</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, {backgroundColor: this.chooseColor(10)}]}
              onPress={ () => { this.playSound('ten') } }
            >
              <Text style={styles.buttonText}>Ten</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#000',
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
  },
  buttonContainer: {

  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
    padding: 5,
    height: 50,
    width: Dimensions.get('window').width,           //IMPORTANT
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
