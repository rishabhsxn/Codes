import React from 'react'

import { StyleSheet, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Dimensions} from 'react-native'
import { Button, Input, Label, Item, Form } from 'native-base'

export default class Home extends React.Component{

  constructor(props){
    super(props)
    this.state={
      name: ''
    }
  }

  static navigationOptions = {
    title: 'Chat Room'
  }

  render(){
    return(
      <TouchableWithoutFeedback 
        onPress={ ()=>{Keyboard.dismiss()} }
        style={styles.container}
      >
      <KeyboardAvoidingView
        enabled
        behavior='position'
        style={styles.screen}
      >
        <Form style={styles.formContainer}>
          <Item floatingLabel>
            <Label>Username</Label>
          </Item>
          <Input
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={ (name) => {this.setState({name})} }
          />

          <Button 
            style={styles.button}
            success
            rounded
            onPress={ () => {this.props.navigation.navigate('Chat', {name: this.state.name} )} }
          >
            <Text style={styles.buttonText}>Start Chat</Text>
          </Button>
        </Form>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
})