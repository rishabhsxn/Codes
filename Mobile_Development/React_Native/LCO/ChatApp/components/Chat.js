import React from 'react'
import Firebase from '../Firebase'
import { GiftedChat } from 'react-native-gifted-chat'

export default class Chat extends React.Component{
  constructor(props){
    super(props)
    this.state={
      messages: []
    }
  }

  static navigationOptions = {
    title: 'Chat Room'
  }

  // add event listener to add new message added to firebase, to add in messages in state
  componentDidMount(){  
    console.disableYellowBox = true   // IMPORTANT: to disable warnings
    Firebase.shared.on( (message)=>{
      this.setState( (previousState)=>({
        messages: GiftedChat.append(previousState.messages, message)
      }) )
    } )
  }

  get user(){
    return {
      name : this.props.navigation.getParam('name'),
      _id: Firebase.shared.uid
    }
  }

  render(){
    return(
      <GiftedChat 
        messages={this.state.messages}
        user={this.user}
        onSend={Firebase.shared.send}
      />
    )
  }
}