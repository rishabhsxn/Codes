import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform, AsyncStorage,
ScrollView, Alert } from 'react-native'
import { Card, CardItem } from 'native-base'
import { Entypo } from '@expo/vector-icons'

export default class ViewContactScreen extends React.Component 
{

  constructor(props)
  {
    super(props)
    this.state={
      fname: 'dummyText',
      lname: 'dummyText',
      phone: 'dummyText',
      email: 'dummyText',
      address: 'dummyText',
      key: 'dummyText'
    }
  }

  static navigationOptions = {
    title: 'View Contact'
  }

  componentDidMount()
  {
    const {navigation} = this.props
    navigation.addListener( 'willFocus', ()=>{
      var key = this.props.navigation.getParam('key', '')
      this.getContact(key)
    } )
  }

  getContact = async key => 
  {
    await AsyncStorage.getItem(key)
      .then( (contactJsonString) => {
        var contact = JSON.parse(contactJsonString)
        contact['key'] = key
        this.setState(contact)
        //console.log(this.state)
      } )
      .catch( (error) => {console.log(error)} )
    
  }

  callAction = phone => 
  {
    let phoneNumber = phone
    if(Platform.OS === 'android')
    {
      phoneNumber = `tel:${phone}`
    }
    else
    {
      phoneNumber = `telprompt:${phone}`
    }

    Linking.canOpenURL(phoneNumber)
     .then( (supported) => {
       if(supported === false)
       {
         alert('Phone number is not available')
       }
       else
       {
         return Linking.openURL(phoneNumber)
       }
     } )
     .catch( (error) => {console.log(error)} )
  }

  smsAction = phone => 
  {
    phoneNumber = `sms:${phone}`
  
    Linking.canOpenURL(phoneNumber)
     .then( (supported) => {
       if(supported === false)
       {
         alert('Phone number is not available')
       }
       else
       {
         return Linking.openURL(phoneNumber)
       }
     } )
     .catch( (error) => {console.log(error)} )
  }

  editContact = key =>
  {
    this.props.navigation.navigate('Edit', { key: key } )
  }

  deleteContact = key => 
  {
    Alert.alert(                   //NOTE: weird syntax
      'Delete Contact?',
      `${this.state.fname} ${this.state.lname}`,
      [
        {
          text: 'Cancel', onPress: () => {console.log('Cancel tapped')} 
        },
        {
          text: 'OK',
          onPress: async () => {
            await AsyncStorage.removeItem(key)
              .then( () => {
                this.props.navigation.goBack()
              } )
              .catch(error => console.log(error))
          }
        }
      ]


    )
  }

  render()
  {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contactIconContainer}>
          <Text style={styles.contactIcon}>{this.state.fname[0].toUpperCase()}</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{this.state.fname} {this.state.lname}</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={ () => {this.editContact(this.state.key)} }
            >
              <Entypo 
                name='edit'
                size={35}
                color='#B83227'
              />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.info}>
          <Card style={styles.infoContainer}>
            <CardItem bordered>
              <Text style={styles.infoText}>Phone: </Text>
            </CardItem>
            <CardItem bordered>
              <Text style={styles.infoText}>{this.state.phone}</Text>
            </CardItem>
          </Card>

          <Card style={styles.infoContainer}>
            <CardItem bordered>
              <Text style={styles.infoText}>Email: </Text>
            </CardItem>
            <CardItem bordered>
              <Text style={styles.infoText}>{this.state.email}</Text>
            </CardItem>
          </Card>

          <Card style={styles.infoContainer}>
            <CardItem bordered>
              <Text style={styles.infoText}>Address: </Text>
            </CardItem>
            <CardItem bordered>
              <Text style={styles.infoText}>{this.state.address}</Text>
            </CardItem>
          </Card>  
        </View>

        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={ () => {this.smsAction(this.state.phone)} }
          >
            <Entypo 
              name='message'
              size={40}
              color='#B83227'
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={ () => {this.callAction(this.state.phone)} }
          >
            <Entypo 
              name='phone'
              size={40}
              color='#B83227'
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={ () => {this.deleteContact(this.state.key)} }
          >
            <Entypo 
              name='trash'
              size={40}
              color='#B83227'
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contactIconContainer: {
    height: 200,
    backgroundColor: "#B83227",
    alignItems: "center",
    justifyContent: "center"
  },
  contactIcon: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#fff"
  },
  nameContainer: {
    flexDirection: 'row',
    width: "100%",
    height: 70,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    //justifyContent: "center",
    alignItems: 'center',
    position: "absolute",
    bottom: 0
  },
  name: {
    fontSize: 24,
    color: "#000",
    fontWeight: "900"
  },
  info:{
    flex: 1,
    borderColor: '#000',
    borderWidth: 2
  },
  infoText: {
    fontSize: 18,
    fontWeight: "300"
  },
  infoContainer: {
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  actionContainer: {
    flexDirection: "row",
    width: '100%',
    borderColor: '#B83227',
    borderWidth: 3,
    padding: 5,
    // position: 'absolute',
    // bottom: 0
  },
  actionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    color: "#B83227",
    fontWeight: "900"
  },
  editButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    right: 10
  }
});
