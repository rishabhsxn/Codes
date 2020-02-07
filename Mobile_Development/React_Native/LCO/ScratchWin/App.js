/*WORKING: first we will load all buttons with 'empty' content so that all button have circle,
then componentDidMount() will be called which will call generateRandomNumber() and number will 
be saved in state, then the array will be updated with the 'lucky' and 'unlucky' values.
when we will click on a button, it will recheck its value in the array
and the new icon will be loaded, either unlucky or lucky  */


import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

/* array of length 25, that contain contents of all button
empty, lucky and unlucky */
var itemArray = new Array(25).fill('empty')

export default class App extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {
      randomNumber: '',
      scratchCount: 0,
      stop: false
    }
  }

  //IMPORTANT after all the elements of the page is rendered correctly, this method is called
  componentDidMount()
  {
    // call generateRandomNumber() and save it in state
    let randomNumber = this.generateRandomNumber()
    this.setState({ randomNumber: randomNumber })
  }

  generateRandomNumber = () => 
  {
    // it will randomly decide which button will have lucky inside it
    return ( Math.floor(Math.random() * 25) )
  }

  scratched = (itemNumber) => 
  {
    if( this.state.stop == false )
    {
      this.setState({ scratchCount: this.state.scratchCount + 1 })
      let win = false
      if(itemNumber == this.state.randomNumber)
      {
        itemArray[itemNumber] = 'lucky'
        win = true
      }
      else
      {
        itemArray[itemNumber] = 'unlucky'
      }

      this.forceUpdate()
      if(win)
      {
        setTimeout(() => { 
          alert('You Won!')
          setTimeout(this.reset, 500)
        } , 500)
      } 
      else
      {
        if(this.state.scratchCount == 4)
        {
          this.setState({ stop: true })
          setTimeout(() => alert('You Lose!') , 300)
          setTimeout(this.revealAll, 500)
        }
      } 
    }
  }

  chooseIcon = (itemNumber) => 
  {
    // choose icon according to content button's array
    if(itemArray[itemNumber] === 'lucky')
    {
      return 'dollar'
    }
    else if(itemArray[itemNumber] === 'unlucky')
    {
      return 'frown-o'
    }

    return 'circle'
  }

  chooseIconColor = (itemNumber) => 
  {
    // choose icon color
    if(itemArray[itemNumber] === 'lucky')
    {
      return 'green'
    } 
    else if(itemArray[itemNumber] === 'unlucky')
    {
      return 'red'
    }

    return 'black'
  }

  reset = () => 
  {
    // reset state and reset array and forceUpdate()
    this.setState({ randomNumber: this.generateRandomNumber() , scratchCount: 0, stop: false })
    itemArray.fill('empty')
    this.forceUpdate()
  }

  revealAll = () => 
  {
    this.setState({ stop: true })
    itemArray.fill('unlucky')
    itemArray[this.state.randomNumber] = 'lucky'
    this.forceUpdate()
  }


  render()
  {
    return (
      <SafeAreaView style={styles.fullScreen}>
        <View style={styles.screen}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Lucky Lottery Game</Text>
          </View>
          
          <Text style={styles.count}>Chances left: {5 - this.state.scratchCount}</Text>
          
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>
              <TouchableOpacity 
                onPress={ () => {this.scratched(0)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(0)}
                  size={50}
                  color={this.chooseIconColor(0)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(1)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(1)}
                  size={50}
                  color={this.chooseIconColor(1)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(2)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(2)}
                  size={50}
                  color={this.chooseIconColor(2)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(3)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(3)}
                  size={50}
                  color={this.chooseIconColor(3)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(4)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(4)}
                  size={50}
                  color={this.chooseIconColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity 
                onPress={ () => {this.scratched(5)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(5)}
                  size={50}
                  color={this.chooseIconColor(5)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(6)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(6)}
                  size={50}
                  color={this.chooseIconColor(6)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(7)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(7)}
                  size={50}
                  color={this.chooseIconColor(7)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(8)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(8)}
                  size={50}
                  color={this.chooseIconColor(8)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(9)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(9)}
                  size={50}
                  color={this.chooseIconColor(9)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity 
                onPress={ () => {this.scratched(10)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(10)}
                  size={50}
                  color={this.chooseIconColor(10)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(11)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(11)}
                  size={50}
                  color={this.chooseIconColor(11)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(12)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(12)}
                  size={50}
                  color={this.chooseIconColor(12)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(13)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(13)}
                  size={50}
                  color={this.chooseIconColor(13)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(14)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(14)}
                  size={50}
                  color={this.chooseIconColor(14)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity 
                onPress={ () => {this.scratched(15)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(15)}
                  size={50}
                  color={this.chooseIconColor(15)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(16)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(16)}
                  size={50}
                  color={this.chooseIconColor(16)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(17)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(17)}
                  size={50}
                  color={this.chooseIconColor(17)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(18)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(18)}
                  size={50}
                  color={this.chooseIconColor(18)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(19)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(19)}
                  size={50}
                  color={this.chooseIconColor(19)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity 
                onPress={ () => {this.scratched(20)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(20)}
                  size={50}
                  color={this.chooseIconColor(20)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(21)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(21)}
                  size={50}
                  color={this.chooseIconColor(21)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(22)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(22)}
                  size={50}
                  color={this.chooseIconColor(22)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(23)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(23)}
                  size={50}
                  color={this.chooseIconColor(23)}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () => {this.scratched(24)} }
                style={styles.button}
              >
                <FontAwesome
                  name={this.chooseIcon(24)}
                  size={50}
                  color={this.chooseIconColor(24)}
                />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.bottomContainer}>
            <TouchableOpacity 
              style={styles.lowerButton}
              onPress={ () => this.revealAll() }
            >
              <Text style={styles.lowerText}>Reveal</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.lowerButton}
              onPress={ () => this.reset() } 
            >
              <Text style={styles.lowerText}>Reset</Text>
            </TouchableOpacity>
          </View>
        
          <Text style={styles.sign}>- Rishabh Saxena</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#000'
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  titleBar: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    backgroundColor: '#000',
    width: Dimensions.get('window').width
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  count: {
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 20
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'center'
  },
  button: {
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
    margin: 2,
    width: '19.01%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width
  },
  lowerButton: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 5,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    width: '40%'
  },
  lowerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  sign: {
    color: '#000',
    alignSelf: 'flex-end',
    bottom: 1,
    position: 'absolute',
    right:10
  }
});
