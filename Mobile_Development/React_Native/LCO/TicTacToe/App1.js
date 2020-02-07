import React from 'react'
import { Image, ActivityIndicator } from 'react-native'
import { Text, Container, Header, Content, Card, CardItem, Thumbnail,
Button, Icon, Left, Body, Right } from 'native-base'
import {Font, AppLoading} from 'expo'

/*NOTE: the roboto font error appears when we use Text component from the 
'native-base' library, it dont give error when we use Text from 'react-native'  */

// REVIEW: learn about async and await in detail
// REVIEW: learn a life cycle methods

export default class App extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentWillMount = async() =>
  {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ isLoading: false })
  }

  render()
  {
    if(this.state.isLoading)
    {
      return <AppLoading />
    }
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./src/images/Square-PhotoWithout.png')} /> 
                <Body>
                  <Text>Rishabh Saxena</Text>
                  <Text note>Coder</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./src/images/ted_Eyes_Crossed.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
