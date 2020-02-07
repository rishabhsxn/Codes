import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, AsyncStorage } from 'react-native'
import { Card } from 'native-base'
import { Entypo } from '@expo/vector-icons'

export default class HomeScreen extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {
      data: []
    }
  }

  static navigationOptions = {
    title: 'Contact App'
  }

  //IMPORTANT: this method will call getAllContacts() every time homescreen is opened
  componentDidMount()
  {
    const {navigation} = this.props
    navigation.addListener('willFocus', () => { this.getAllContacts() })
  }
  // method to get all contacts
  getAllContacts = async () => 
  {
    await AsyncStorage.getAllKeys()
    .then( (keys) => {
      AsyncStorage.multiGet(keys)   //result is an array of arrays each having 2 elements (format given at last)
      .then( (result) => {
        this.setState({
          data: result.sort( function(a, b){     // refer notes
            if(JSON.parse(a[1]).fname < JSON.parse(b[1]).fname) { return -1 }
            if(JSON.parse(a[1]).fname > JSON.parse(b[1]).fname) { return 1 }
            return 0
          } )
        })
        //console.log(this.state.data)
      } )
      .catch( (error) => { console.log(error) } )
    } )
    .catch( (error) => { console.log(error) } )
  }

  render()
  {
    return (
      <View style={styles.container}>
        
        <FlatList 
          data={this.state.data}
          renderItem={ ({item}) => {       //NOTE: weird syntax
            let contact= JSON.parse(item[1])
            return (
              <TouchableOpacity
                onPress={ () => {
                  this.props.navigation.navigate('View', { key: item[0].toString() })
                } }
              >
                <Card style={styles.listItem}>
                  <View style={styles.iconContainer}>
                    <Text style={styles.contactIcon}>
                      {contact.fname[0].toUpperCase()}
                    </Text>
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={[styles.infoText, {fontWeight: 'bold'}]}>
                      {contact.fname} {contact.lname}
                    </Text>
                    <Text style={styles.infoText}>
                      {contact.phone}
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            )            
          }}
          keyExtractor={ (item, index) => item[0].toString() }  
        />
        
        <TouchableOpacity
          style={styles.floatButton}
          onPress={ () => {this.props.navigation.navigate('Add')} }
        >
          <Entypo 
            name='plus'
            size={30}
            color='#fff'
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  listItem: {
    flexDirection: "row",
    padding: 20
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B83227",
    borderRadius: 100
  },
  contactIcon: {
    fontSize: 28,
    color: "#fff"
  },
  infoContainer: {
    flexDirection: "column"
  },
  infoText: {
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 10,
    paddingTop: 2
  },
  floatButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    bottom: 10,
    right: 15,
    height: 60,
    backgroundColor: "#B83227",
    borderRadius: 100
  }
})

/*

Array [
  Array [
    "1563191106629",
    "{\"fname\":\"Rishabh\",\"lname\":\"Saxena\",\"phone\":\"7017798163\",\"email\":\"rishabhsaxena1998@gmail.com\",\"address\":\"Ramayan vihar colony\"}",
  ],
  Array [
    "1563191372371",
    "{\"fname\":\"Sanyam\",\"lname\":\"Saxena\",\"phone\":\"9411494923\",\"email\":\"sanyamsxn2000@gmail.com\",\"address\":\"Ramayan Vihar Colony\"}",
  ],
  Array [
    "1563191430165",
    "{\"fname\":\"Alpana\",\"lname\":\"Saxena\",\"phone\":\"9458595584\",\"email\":\"alpanasxn1969@gmail.com\",\"address\":\"Ramayan Vihar colony\"}",
  ],
  Array [
    "1563191480612",
    "{\"fname\":\"Anil\",\"lname\":\"Saxena\",\"phone\":\"9412555070\",\"email\":\"anilsaxena1976@gmail.com\",\"address\":\"Ramayan Vihar Colony\"}",
  ],
]


*/