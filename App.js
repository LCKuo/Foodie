import { StatusBar } from 'expo-status-bar';
import { Component, React, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import MainScreen from './components/Main';
import AddScreen from './components/main/Scan';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
    }
  }

  checkLogin = async () => {
    try {
      let userName = await AsyncStorage.getItem("name")
      if (userName) {
        this.setState({
          loggedIn: true
        })
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
    this.setState({
      loggedIn: true
    })
  }

  doLout = (bool) => {
    if (bool) {
      this.setState({
        loggedIn: false
      })
    }
  }


  Combine = () => {
    return (
      <>
        <MainScreen doLout={this.doLout} />
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
        <LandingScreen doLin={this.doLin} doLout={this.doLout} />
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
            <Stack.Screen name="Add" component={AddScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }


  }
}

export default App
