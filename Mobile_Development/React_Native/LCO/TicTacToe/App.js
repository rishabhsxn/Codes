//REVIEW: learn about aligning individual flex items along main axis 
//         - top, botton, left, right: 1, can be used with position: 'absolute' in styling
//REVIEW: learn about Headers

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
 
//initiate an array of size 9, all elements set to 'empty'
var Items = new Array(9).fill('empty')

export default class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      isCross: false,
      winMessage: 'Draw!',
      count: 0
    }
  }

  drawIcon = async (itemNumber) => 
  {
    // if item is empty, check isCross state - then set Items[itemNumber] accordingly
    if(Items[itemNumber] === 'empty')
    {
      Items[itemNumber] = this.state.isCross
      // also inverse the isCross state
      this.setState({ isCross: !Items[itemNumber] })
    } 
    
    // also check the win condition 
    var win = await this.winLogic() // step 1  //REVIEW: Why use await here?
    if(win || this.state.count === 9)
    {
      var msg = this.state.winMessage
      alert(msg)                        
      this.resetGame()
    }
  }

  chooseIcon = (itemNumber) => 
  {
    // if Items[itemNumber] empty, return 'pencil'
    // if Items[itemNumber] not empty, return accordingly
    // true - return 'cross', false - return 'circle'
    if(Items[itemNumber] !== 'empty')
    {
      return Items[itemNumber] ? 'cross' : 'circle'
    }
    return 'pencil'
  }

  iconColor = (itemNumber) =>
  {
    // return red for cross, green for circle and black for empty 
    if(Items[itemNumber] !== 'empty')
    {
      return Items[itemNumber] ? 'red' : 'green'
    }
    return 'black'
  }

  resetGame = () => 
  {
    // fill the Items array with empty
    Items.fill('empty')
    // change isCross state to false
    // reset the win message
    // reset count
    this.setState({ isCross: false, winMessage: 'Draw!', count: 0 })
    // force update components
    this.forceUpdate()
  }

  winLogic = () => // step 2
  {
    // increase count by 1, to determine draw condition
    this.setState({ count: this.state.count + 1})
    var win = false

    if (Items[0] !== "empty" && Items[0] == Items[1] && Items[1] == Items[2]) 
    {
      this.setState({ winMessage: (Items[0] ? "Cross" : "Circle").concat(" wins!") })
      win = true
    } 
    else if ( Items[3] !== "empty" && Items[3] == Items[4] && Items[4] == Items[5]) 
    {
      this.setState({ winMessage: (Items[3] ? "Cross" : "Circle").concat(" wins!") })
      win = true
    }
    else if ( Items[6] !== "empty" && Items[6] == Items[7] && Items[7] == Items[8]) 
    {
      this.setState({ winMessage: (Items[6] ? "Cross" : "Circle").concat(" wins!") })
      win = true
    }
    else if ( Items[0] !== "empty" && Items[0] == Items[3] && Items[3] == Items[6]) 
    {
      this.setState({ winMessage: (Items[0] ? "Cross" : "Circle").concat(" wins!") })
      win = true
    }
    else if ( Items[1] !== "empty" && Items[1] == Items[4] && Items[4] == Items[7]) 
    {
      this.setState({ winMessage: (Items[1] ? "Cross" : "Circle").concat(" wins!") })
      win = true
    }
    else if ( Items[2] !== "empty" && Items[2] == Items[5] && Items[5] == Items[8]) 
    {
      this.setState({ winMessage: (Items[2] ? "Cross" : "Circle").concat(" wins!") })
      win = true
    }
    else if ( Items[0] !== "empty" && Items[0] == Items[4] && Items[4] == Items[8]) 
    {
      this.setState({ winMessage: (Items[0] ? "Cross" : "Circle").concat(" wins!") })
      win = true
    }
    else if ( Items[2] !== "empty" && Items[2] == Items[4] && Items[4] == Items[6]) 
    {
      this.setState({ winMessage: (Items[2] ? "Cross" : "Circle").concat(" wins!") })
      win = true
    }

    return win
  }

  render()
  {
    return (
      <SafeAreaView style={styles.fullScreen}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('./assets/LCO.png')} style={styles.icon}/>
            <Text style={styles.headerText}>Tic Tac Toe</Text>
          </View>

          <View style={styles.gameBox}>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity onPress={ () => { this.drawIcon(0) }}>
                  <Entypo 
                    name={this.chooseIcon(0)}
                    size={60}
                    color={this.iconColor(0)}
                  /> 
                </TouchableOpacity> 
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={ () => { this.drawIcon(1) }}>
                  <Entypo 
                    name={this.chooseIcon(1)}
                    size={60}
                    color={this.iconColor(1)}
                  /> 
                </TouchableOpacity> 
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={ () => { this.drawIcon(2) }}>
                  <Entypo 
                    name={this.chooseIcon(2)}
                    size={60}
                    color={this.iconColor(2)}
                  /> 
                </TouchableOpacity> 
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity onPress={ () => { this.drawIcon(3) }}>
                  <Entypo 
                    name={this.chooseIcon(3)}
                    size={60}
                    color={this.iconColor(3)}
                  /> 
                </TouchableOpacity> 
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={ () => { this.drawIcon(4) }}>
                  <Entypo 
                    name={this.chooseIcon(4)}
                    size={60}
                    color={this.iconColor(4)}
                  /> 
                </TouchableOpacity> 
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={ () => { this.drawIcon(5) }}>
                  <Entypo 
                    name={this.chooseIcon(5)}
                    size={60}
                    color={this.iconColor(5)}
                  /> 
                </TouchableOpacity> 
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity onPress={ () => { this.drawIcon(6) }}>
                  <Entypo 
                    name={this.chooseIcon(6)}
                    size={60}
                    color={this.iconColor(6)}
                  /> 
                </TouchableOpacity> 
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={ () => { this.drawIcon(7) }}>
                  <Entypo 
                    name={this.chooseIcon(7)}
                    size={60}
                    color={this.iconColor(7)}
                  /> 
                </TouchableOpacity> 
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={ () => { this.drawIcon(8) }}>
                  <Entypo 
                    name={this.chooseIcon(8)}
                    size={60}
                    color={this.iconColor(8)}
                  /> 
                </TouchableOpacity> 
              </View>
            </View>
          </View>
          
          <TouchableOpacity 
            onPress={ () => {this.resetGame()} }
            iconLeft 
            style={styles.resetButton}
          >
            <Entypo name='cycle' color={'#fff'} size={20}/>
            <Text style={styles.resetText}> Reset</Text>
          </TouchableOpacity>
        
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
  header: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 20,
    width: '100%',
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    padding: 10,
    position: 'absolute',
    top: 1,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    height: 25,
    width: 30,
    position: 'absolute',
    left: 10
  },
  container: {
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  gameBox: {},
  row: {
    flexDirection: 'row',
    width: '100%'
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
    padding: 25,
    width: '33%',
  },
  resetButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000',
    alignSelf: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
  },
  resetText: {
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 20,
  },
  sign: {
    color: '#000',
    alignSelf: 'flex-end',
    bottom: 1,
    position: 'absolute',
    right:10
  }
})