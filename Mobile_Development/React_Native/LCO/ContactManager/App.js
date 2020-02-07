// import screens
import HomeScreen from './screens/HomeScreen'
import AddNewContactScreen from './screens/AddNewContactScreen'
import EditContactScreen from './screens/EditContactScreen'
import ViewContactScreen from './screens/ViewContactScreen'

import {createAppContainer, createStackNavigator} from 'react-navigation'

const mainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Add: {screen: AddNewContactScreen},
    Edit: {screen: EditContactScreen},
    View: {screen: ViewContactScreen}
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#b83227'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
)

const myApp = createAppContainer(mainNavigator)

export default myApp