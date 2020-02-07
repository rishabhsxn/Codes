import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native'

export default class Home extends React.Component 
{
  static navigationOption = {   //REVIEW: what is this?
    title: 'PhotoClicker'
  }
  
  render()
  {
    let photo = this.props.navigation.getParam('photo', 'empty')

    return(
      <View style={styles.container}>
        <Image 
          resizeMode='center'
          style={styles.imageContainer}
          source={ photo === 'empty' ? require('../assets/lco.png') : photo }
        />

        <TouchableOpacity
          style={styles.button}
          onPress={ () => {this.props.navigation.navigate('CameraScreen')} }
        >
          <Text style={styles.buttonText}>
            Take Photo
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
  imageContainer: {
    //borderColor: '#000',
    //borderWidth: 2,
    margin: 20,
    alignSelf: 'center',
    height: 450,
    margin: 20
  },
  button: {
    backgroundColor: '#BA2F16',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
})
