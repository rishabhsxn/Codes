import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons/'
import { Camera, Permissions } from 'expo'

export default class CameraScreen extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {
      hasCameraPermission: null,
      type : Camera.Constants.Type.back,
      flashLightMode: Camera.Constants.FlashMode.off
    }
  }

  static navigationOption = {   //REVIEW: What is this?
    title: 'CameraScreen'
  }

  // ask for camera permission
  async componentDidMount()
  {
    const {status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermission: status === 'granted'
    })
  }

  // method flip the camera
  flipCamera = () => 
  {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
    })
  }

  // method to turn on/off flashlight
  flashLight = () => 
  {
    this.setState({
      flashLightMode: this.state.flashLightMode === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off 
    })
  }

  // take photo and send to home
  takePhoto = async () =>     //REVIEW: what is this camera? (what is ref?) video- Flashlight and camera flip
  {
    if(this.camera)
    {
      let photo = await this.camera.takePictureAsync()
      this.props.navigation.navigate('Home', { photo: photo })
    }
  }

  render()
  {
    const { hasCameraPermission } = this.state

    if(hasCameraPermission === null)
    {
      return <View><Text>Testing</Text></View>
    }
    else if(hasCameraPermission === false)
    {
      return <View><Text>No access to camera</Text></View>
    }
    else
    {
      return(
        <View style={styles.cameraContainer}>
          <Camera
            style={styles.cameraView}
            type={this.state.type}
            flashMode={this.state.flashLightMode}
            ref={ref => {         //REVIEW:  What???
              this.camera = ref
            }}
          >
            <View style={styles.cameraButtonContainer}>
              <TouchableOpacity 
                style={styles.iconHolder}
                onPress={ () => {this.flipCamera()} }
              >
                <FontAwesome 
                  name='camera'
                  size={35}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.iconHolder}
                onPress={ () => {this.takePhoto()} }
              >
                <FontAwesome 
                  name='circle'
                  size={35}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.iconHolder}
                onPress={ () => {this.flashLight()} }
              >
                <FontAwesome 
                  name='flash'
                  size={35}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )
    }
    
  }
}
                                    
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  cameraView: {
    flex: 1
  },
  cameraButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  iconHolder: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  icon: {
    marginBottom: 10,
    color: '#fff'
  }
})
