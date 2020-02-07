import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { Button } from 'native-base'

import * as firebase from 'firebase'

export default class HomeScreen extends React.Component{

  constructor(props){
    super(props)
    this.state={
      name: '',
      email: ''
    }
  }
  
  componentDidMount(){         //FIXME: 
    firebase.auth().onAuthStateChanged( (authenticate)=>{
      if(authenticate){
        this.setState({
          name: authenticate.displayName,
          email: authenticate.email
        })
      }
      else{
        this.props.navigation.replace('SignIn')
      }
    } ) 
  }

  static navigationOptions={
    title: 'Home',
    header: null
  }

  signOutUser = () => {
    firebase.auth()
    .signOut()
    .catch(error => console.log(error.message))
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/logo.png')}
          />
          <Text>LearnCodeOnline.in</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Hey {this.state.name}!</Text>
          <Text>You are logged in as <Text style={styles.email}>{this.state.email}</Text>.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            danger
            full
            onPress={ ()=>{this.signOutUser()} }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign Out</Text>
          </Button>
        </View>
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
    marginTop: 30
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    flexWrap: 'wrap'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
  email: {
    color: '#019031'
  }
});
