import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component 
{

  constructor(props)
  {
    super(props)
    this.state = {
      randomColor: '#DAE0E2',
      buttonColor: '#2B2B52'
    }
  }

  getRandomColor()
  {
    return(
      'rgb(' +
       Math.floor(Math.random()* 256) + ', ' +
       Math.floor(Math.random()* 256) + ', ' + 
       Math.floor(Math.random()* 256) + ')'
    )
  }

  myButtonPressed = () =>     //REVIEW: why arrow fn necessary?
  {
    this.setState( {
      randomColor: this.getRandomColor(),
      buttonColor: this.getRandomColor()
    } )   
  }

  /*  NOTE: why not this.myButtonPressed() ? - because using this.myButtonPressed we 
  have passed the function itself to the other function (callback fn) (refer notes for details)
  */

  render()
  {
    return (
      <View style={ [styles.container, {backgroundColor: this.state.randomColor}] }>
        <TouchableOpacity onPress={this.myButtonPressed}>   
          <Text style={ [styles.text, {backgroundColor: this.state.buttonColor}] }>
          What people do?
          </Text>
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
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF'
  }
})
