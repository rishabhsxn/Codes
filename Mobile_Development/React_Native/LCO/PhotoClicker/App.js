import Home from './screens/Home.js'
import CameraScreen from './screens/CameraScreen'
import { createAppContainer, createStackNavigator } from 'react-navigation'

const mainNavigator = createStackNavigator(
  {
    Home : { screen: Home },
    CameraScreen : { screen: CameraScreen }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#BA2F16'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
)

const myApp = createAppContainer(mainNavigator)

export default myApp