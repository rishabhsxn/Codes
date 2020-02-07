import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView,
Image, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native'

import * as firebase from 'firebase'

import { Form, Item, Input, Label, Button } from 'native-base'

export default class SignUpScreen extends React.Component{

  constructor(props){
    super(props)
    this.state={
      name: '',
      email: '',
      password: ''
    }
  }

  static navigationOptions = {
    title: 'Sign up',
    header: null
  }

  signUpUser = (email,password, name) => {
    if(name==='' || email==='' || password===''){
      Alert.alert('All fields are required!')
    }
    else{
      firebase.auth()
      .createUserWithEmailAndPassword(email,password)
      .then( (authenticate)=>{
        return authenticate.user
        .updateProfile({
          displayName: name
        })  
      } )
        .then( ()=>{this.props.navigation.replace('Home')} )
      .catch(error => {Alert.alert(error.message)})

    }
  }

  signIn = () => {
    this.props.navigation.replace('SignIn')
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
              <Label>Name</Label>
              <Input 
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='default'
                onChangeText={(name)=>{this.setState({name})}}
              />
            </Item>
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
              success
              full
              onPress={ ()=>{this.signUpUser(this.state.email, this.state.password, this.state.name)} }
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </Button>
          </Form>
          </View>
          <View style={styles.footer}>
            <Text>OR</Text>
            <TouchableOpacity
              onPress={ ()=>{this.signIn()} }
            >
              <Text style={styles.createText}>Already having an Account?</Text>
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