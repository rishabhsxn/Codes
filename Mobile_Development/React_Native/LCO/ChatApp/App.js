import Chat from './components/Chat'
import Home from './components/Home'

import { createAppContainer, createStackNavigator } from 'react-navigation'

const mainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Chat: {screen: Chat}
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

const MyApp = createAppContainer(mainNavigator)

export default MyApp