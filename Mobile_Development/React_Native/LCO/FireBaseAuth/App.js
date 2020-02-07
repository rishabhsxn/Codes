import { createAppContainer, createStackNavigator } from 'react-navigation'

import HomeScreen from './src/screens/HomeScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import LoadingScreen from './src/screens/LoadingScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBGUQYHfOzgU9tT_z4gMxlAXmiao-agcIE",
  authDomain: "reactbootcamp-af1c4.firebaseapp.com",
  databaseURL: "https://reactbootcamp-af1c4.firebaseio.com",
  projectId: "reactbootcamp-af1c4",
  storageBucket: "",
  messagingSenderId: "894814163462",
  appId: "1:894814163462:web:27b7f68c5b63e88a"
}
firebase.initializeApp(firebaseConfig)

const mainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
    Load: { screen: LoadingScreen }
  },
  {
    initialRouteName: 'Load'
  }
)

const MyApp = createAppContainer(mainNavigator)

export default MyApp