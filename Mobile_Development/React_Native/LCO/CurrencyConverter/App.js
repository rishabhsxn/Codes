import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, 
TouchableWithoutFeedback, Keyboard } from 'react-native';

export default class App extends React.Component 
{

  constructor(props)
  {
    super(props)
    this.state = {
      output: '0.0',
      input: ''// step 1
    }
  }

  // TODO: create object with all currency values
  currencyValue = {
    DOLLAR: 0.014,
    EURO: 0.012,
    POUND: 0.011,
    RUBEL: 0.93,
    AUSDOLLAR: 0.2,
    CANDOLLAR: 0.019,
    YEN: 1.54,
    DINAR: 0.0043,
    BITCOIN: 0.0000041
  }

  /* TODO: Create a function to calculate value to be shown
  It will be called by callback function of currency button
  It will have a parameter indicating currency name */
  buttonPressed = (currency) => {
    if(isNaN(this.state.input) || this.state.input==0)
    {
      alert('Enter a number!')
    }
    else
    {
      var valuePerRs = this.currencyValue[currency]
      if(currency=='BITCOIN')
      {
        var result = (valuePerRs * this.state.input).toFixed(6)
      }
      else
      {
        var result = (valuePerRs * this.state.input).toFixed(2)
      }
      this.setState({ output: result})
    }
  }

  render()
  {
    return (                          // dismiss keyboard by touch on screen
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
        <SafeAreaView style={styles.container}>
        <View style={styles.screen}>
          <View style={styles.outputAndClear}>
            <View style={styles.outputContainer}>
              <Text style={styles.outputText}>
                {this.state.output}
              </Text>
            </View>
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={ () => { this.setState({output: '0.0',input :''})}} // step 3
              >
              <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>  
            <TextInput 
              style={styles.inputText}
              keyboardType='numeric'
              placeholder='Enter Value in INR...'
              value={this.state.input} // step 2
              onChangeText={ (input) => this.setState({input: input}) }
            />
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={ () => { this.buttonPressed('DOLLAR')}}
              >
              <Text style={styles.buttonText}>DOLLAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={ () => { this.buttonPressed('EURO')}}
              >
              <Text style={styles.buttonText}>EURO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={ () => { this.buttonPressed('POUND')}}
              >
              <Text style={styles.buttonText}>POUND</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={ () => { this.buttonPressed('RUBEL')}}
              >
              <Text style={styles.buttonText}>RUBEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={ () => { this.buttonPressed('AUSDOLLAR')}}
              >
              <Text style={styles.buttonText}>AUS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={ () => { this.buttonPressed('CANDOLLAR')}}
              >
              <Text style={styles.buttonText}>CANADA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={ () => { this.buttonPressed('YEN')}}
              >
              <Text style={styles.buttonText}>YEN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={ () => { this.buttonPressed('DINAR')}}
              >
              <Text style={styles.buttonText}>DINAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={ () => { this.buttonPressed('BITCOIN')}}
              >
              <Text style={styles.buttonText}>BITTY</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C4B4B'
  },
  screen: {
    marginTop:20,
    flex:1
  },
  outputAndClear: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    marginTop: 80,
  },
  outputContainer: {
    height: 70,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498DB',
    borderWidth: 2,
    borderColor: '#c1c1c1',
  },
  outputText: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  clearButton: {
    borderColor: '#c1c1c1',
    borderWidth: 2,
    height: 70,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    backgroundColor: '#3498DB',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#c1c1c1',
    
  },
  inputText: {             
    //flexWrap: 'wrap',
    color: '#FFF',

  },
  buttonArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: '#c1c1c1',
    borderWidth:2,
    marginTop: 20
  },
  buttons: {
    backgroundColor: '#3498DB',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: '33.33%',
    borderColor: '#c1c1c1',
    borderWidth: 2
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
