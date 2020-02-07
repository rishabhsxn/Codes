import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView,
Image, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native'
import * as firebase from 'firebase'
import { Form, Item, Input, Label, Button } from 'native-base'

export default class SignInScreen extends React.Component{

  constructor(props){
    super(props)
    this.state={
      email: '',
      password: ''
    }
  }

  static navigationOptions = {
    title: 'Sign in',
    header: null
  }

  createNewAccount = () => {
    this.props.navigation.navigate('SignUp')
  }

  signInUser = (email, password) => {
    console.log(this.state)
    
    if(email === '' && password === ''){
      Alert.alert('Please enter your email and password!')
    }
    else if(email === '' || password === ''){
      if(email==='') { Alert.alert('Please enter your email!') }
      else { Alert.alert('Please enter your password!') }
    }
    else{
      firebase.auth()
      .signInWithEmailAndPassword(email,password)
      .then( ()=>{this.props.navigation.replace('Home')} )
      .catch(error => {
        Alert.alert(
          'Account with this email does not exist!',
          'Create account!',
          [
            {
              text: 'Ok', onPress: () => {console.log('Ok tapped')} 
            }
          ]
        )
      })
    }


  } 

  render(){
    return (
      <TouchableWithoutFeedback
        onPress={()=>{Keyboard.dismiss()}}
        style={styles.wholeScreen}
      >
        <KeyboardAvoidingView
          enabled
          behavior='position'
          style={styles.container}
        >
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/logo.png')}/>
            <Text>LearnCodeOnline.in</Text>
          </View>
          <View style={styles.formContainer}>
          <Form style={styles.form}>
            <Item 
              style={styles.item}
              floatingLabel
            >
              <Label>Email</Label>
              <Input 
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                onChangeText={(email)=>{this.setState({email})}}
              />
            </Item>
            <Item 
              style={styles.item}
              floatingLabel
            >
              <Label>Password</Label>
              <Input 
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='default'
                secureTextEntry
                onChangeText={(password)=>{this.setState({password})}}
              />
            </Item>

            <Button 
              style={styles.button}
              primary
              full
              onPress={ ()=>{this.signInUser(this.state.email, this.state.password)} }
            >
              <Text style={styles.buttonText}>Sign in</Text>
            </Button>
          </Form>
          </View>
          <View style={styles.footer}>
            <Text>OR</Text>
            <TouchableOpacity
              onPress={ ()=>{this.createNewAccount()} }
            >
              <Text style={styles.createText}>Create a new Account?</Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
      
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  wholeScreen: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  logoContainer: {
    flex: 2,
    alignItems: "center",
    width: Dimensions.get('window').width,
    justifyContent: 'center'
  },
  formContainer: {
    flex: 5,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end'
  },
  form: {
    padding: 20,
    width: "100%",
  },
  item: {
    borderColor: '#000',
    borderWidth: 2,
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    flex: 2,
    alignItems: "center",
    justifyContent: 'flex-start'
  },
  createText: {
    color: '#0645AD'
  }
});