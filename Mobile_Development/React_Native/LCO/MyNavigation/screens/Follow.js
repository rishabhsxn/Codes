import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


export default class Follow extends React.Component 
{
  render()
  {
    const followSuggetions = this.props.navigation.getParam('followSuggestions', '')
    const doFollow = this.props.navigation.getParam('doFollow', '')
    return (
      <View style={styles.container}>
        <Text>You can follow these people</Text>
        
        {
          //IMPORTANT - weird syntax - REVIEW:
          followSuggetions.map( (frnd, index) => (
            <Button 
              key={frnd}
              title={`Follow ${frnd}`}
              onPress={ () => {
                doFollow(index)
                this.forceUpdate()
              } 
              }
            />
          ) )
        }

        <Button 
            title='Go to Home page'
            onPress={ () => { this.props.navigation.navigate('Home') } }
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
