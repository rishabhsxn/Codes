import React from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, SafeAreaView } from 'react-native'

export default class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount(){
    this.getData()
  }

  capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  getData = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then( (response) => response.json() )
    .then( (responseJson) => { 
      extractedData = responseJson.results
      extractedData.forEach( (element, index) => {
        element.name.title = this.capitalize(element.name.title)
        element.name.first = this.capitalize(element.name.first)
        element.name.last = this.capitalize(element.name.last)
        element.location.city = this.capitalize(element.location.city)
      } )
      
      this.setState({
        isLoading: false,
        dataSource: this.state.dataSource.concat(extractedData)
      }) 
    } )
    .catch(error => console.log(error))
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator 
            size='large'
            color='#B83227'
          />
        </View>
      )
    }
    return (
      <SafeAreaView style={styles.whole}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Users API</Text>
        </View>
        <View style={styles.container}>
          <FlatList 
            data={this.state.dataSource}
            renderItem={ ({item}) => (
              <View style={styles.items}>
                <View>
                  <Image 
                    source={{ uri: item.picture.large }}
                    style={styles.pic}
                  />
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.infoText}>Name: {item.name.title} {item.name.first} {item.name.last}</Text>
                  <Text style={styles.infoText}>Email: {item.email}</Text>
                  <Text style={styles.infoText}>City: {item.location.city}</Text>
                  <Text style={styles.infoText}>Phone: {item.phone}</Text>
                </View>
              </View>
            ) }
            keyExtractor={ (item) => item.login.uuid.toString()}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  whole: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: '#B83227'
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    left: 15,
    bottom: 8
  },
  container: {
    flex: 10,
    backgroundColor: '#fff',
  },
  items: {
    borderColor: '#c1c1c1',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pic: {
    height: 110,
    width: 100,
    flex: 2,
    margin: 10,
    borderColor: '#000',
    borderWidth: 2
  },
  infoContainer: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  infoText: {
    fontSize: 15
  }
});
