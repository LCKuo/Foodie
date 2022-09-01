import { StatusBar } from 'expo-status-bar';
import { Component, React } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import MainScreen from './components/Main';
import ScanScreen from './components/main/Scan';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
      name: '',
      picture: '',
      email: ''
    }
  }

  checkLogin = async () => {
    this.doLoading()
    try {
      let userName = await AsyncStorage.getItem("name")
      if (userName) {
        this.getInfo()
      } else {
        this.setState({
          loggedIn: false
        })
      }
    } catch (err) {
      alert(err)
    }
    this.setState({
      loaded: true
    })
  };


  componentDidMount() {
    this.checkLogin();
  }

  doLin = () => {
    this.getInfo()
  }

  doLout = (bool) => {
    if (bool) {
      this.setState({
        loggedIn: false
      })
    }
  }
  doLoading = () => {
    this.setState({ loaded: false })
  }
  getInfo = async () => {
    try {
      const _name = await AsyncStorage.getItem("name")
      const _picture = await AsyncStorage.getItem("picture")
      const _email = await AsyncStorage.getItem("email")
      //拿站台東西寫這，拿完再 loggedIn: true 
      this.setState({
        loggedIn: true,
        name: _name,
        picture: _picture,
        email: _email
      })
      this.setState({ loaded: true })
    } catch (err) {
      alert(err)
    }
  }

  Combine = () => {
    return (
      <>
        <MainScreen
          doLout={this.doLout}
          name={this.state.name}
          picture={this.state.picture}
          email={this.state.email}
        />
      </>
    );
  }
  render() {

    if (!this.state.loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      )
    }

    if (!this.state.loggedIn) {
      return (
        <LandingScreen doLin={this.doLin} doLout={this.doLout} doLoading={this.doLoading} />
      )
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Main"
              component={this.Combine}
              options={{ headerShown: false }}
              initialParams={{ doLout: this.doLout }}
            />
            <Stack.Screen name="Add" component={ScanScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }


  }
}

export default App
