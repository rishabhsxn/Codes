import React from 'react'
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native'

export default class App extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {
      uri1 : require('./src/images/dice1.png'),
      uri2 : require('./src/images/dice1.png')
    }
  }

  getRandomValue = () =>
  {
    return ( Math.floor(Math.random() * 6) + 1 )
  }

  playButtonPressed = () =>
  {
    var number1 = this.getRandomValue()
    var number2 = this.getRandomValue()

    switch (number1) 
    {
      case 1: { this.setState({ uri1: require('./src/images/dice1.png') }) }
      break;
      case 2: { this.setState({ uri1: require('./src/images/dice2.png') }) }
      break;
      case 3: { this.setState({ uri1: require('./src/images/dice3.png') }) }
      break;
      case 4: { this.setState({ uri1: require('./src/images/dice4.png') }) }
      break;
      case 5: { this.setState({ uri1: require('./src/images/dice5.png') }) }
      break;
      case 6: { this.setState({ uri1: require('./src/images/dice6.png') }) }
      break;
    }

    switch (number2) 
    {
      case 1: { this.setState({ uri2: require('./src/images/dice1.png') }) }
      break;
      case 2: { this.setState({ uri2: require('./src/images/dice2.png') }) }
      break;
      case 3: { this.setState({ uri2: require('./src/images/dice3.png') }) }
      break;
      case 4: { this.setState({ uri2: require('./src/images/dice4.png') }) }
      break;
      case 5: { this.setState({ uri2: require('./src/images/dice5.png') }) }
      break;
      case 6: { this.setState({ uri2: require('./src/images/dice6.png') }) }
      break;
    }
  }

  render()
  {
    return (
      <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={this.state.uri1} style={styles.image} />
        <Image source={this.state.uri2} style={styles.image} />
      </View>
      <View style={styles.container3}>
        <TouchableOpacity onPress={this.playButtonPressed}>
          <Text style={styles.gamebutton}>Roll Dice</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  container2: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#2e3131',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  container3: {
    flex: 1,
    backgroundColor: '#2e3131',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  gamebutton: {
    marginTop: 20,
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    backgroundColor: null
  },
  image: {
    height: 175,
    width: 175
  }
})
