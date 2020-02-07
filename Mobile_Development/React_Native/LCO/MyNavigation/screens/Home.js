import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


export default class Home extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state={
      followSuggestions: ['John', 'Jane', 'Ram', 'Janice'],
      following: ['Rishabh']
    }
  }

  doFollow = index => 
  { //WORKING: pulls a friend from suggestions and push it to 'following' array
    const { followSuggestions, following } = this.state
    var newFollow = followSuggestions.splice(index, 1)
    following.push(newFollow)

    this.setState({
      followSuggestions,
      following
    })
  }

  render()
  {
    return (
      <View style={styles.container}>
        <Text>You are following {this.state.following.length} friend</Text>
        <Button 
          title='Go to Follow page'
          onPress={ () => { this.props.navigation.navigate('Follow', {
            followSuggestions: this.state.followSuggestions,
            following: this.state.following,
            doFollow: this.doFollow
          })} }
        />
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
