import { StatusBar } from 'expo-status-bar';
import { Component, React } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LandingScreen from './components/auth/Landing';
import LoginScreen from './components/auth/Login';
import RegisScreen from './components/auth/Register';
import MainScreen from './components/Main';
import AddScreen from './components/main/Add';
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
  componentDidMount() {
    this.setState({
      loaded: true
    })
    async () => {
      try {
        let userInf = await AsyncStorage.getItem("UserInfo")
        if (!userInf) {
          this.setState({
            loggedIn: false
          })
        } else {
          this.setState({
            loggedIn: true
          })
        }
      } catch (err) {
        alert(err)
      }

    }
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
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    } else {
      return (
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
              <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Add" component={AddScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      )
    }


  }
}

export default App
