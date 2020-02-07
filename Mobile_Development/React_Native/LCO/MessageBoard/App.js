import React from 'react'
import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView } from 'react-native'
import { Icon, Input } from 'native-base'
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

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      message: '',
      messageList: []
    }
  }
  
  componentDidMount(){
    var self = this

    var messageListRef = firebase.database().ref('message_list')
    messageListRef.on('value', dataSnapShot => {
      if(dataSnapShot.val()){
        let messageList = Object.values(dataSnapShot.val())
        self.updateList(messageList.reverse())       
        //IMPORTANT: in this depth of functions, 'this' keyword is not available    
      }
    })
  }

  sendMessage = message => {
    var messageListRef = firebase.database().ref('message_list')
    // push message to database
    var newMessageRef = messageListRef.push()
    newMessageRef.set({
      text: message,
      time: Date.now()
    })

    //reset the state
    this.setState({message: ''})
  }

  updateList = messageList => {
    this.setState({messageList})
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Test</Text>
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
})
