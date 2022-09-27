import { Component, React } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/Main';
import ScanScreen from './components/main/Scan';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Search from './components/SearchComps/Search';
import SearchLevel2 from './components/SearchComps/SearchLevel2';
import SearchLevel3 from './components/SearchComps/SearchLevel3';
import { isLogin, clearAll } from './components/lib';

import Waiting from './components/auth/Waiting'
import Regist from './components/auth/Regist'
import LandR from './components/auth/LandR';
import LoginPage from './components/auth/LoginPage'
import ForgetPassWord from './components/auth/ForgetPassWord';

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
    clearAll();
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


  render() {

    if (!this.state.loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandR">
          <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Add" component={ScanScreen} />
          <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
          <Stack.Screen name="SearchLevel2" component={SearchLevel2} options={{ headerShown: false }} />
          <Stack.Screen name="SearchLevel3" component={SearchLevel3} options={{ headerShown: false }} />

          <Stack.Screen name="Regist" component={Regist} options={{ headerShown: false }} />
          <Stack.Screen name="LandR" component={LandR} options={{ headerShown: false }} />
          <Stack.Screen name="Waiting" component={Waiting} options={{ headerShown: false }} />
          <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="ForgetPassWord" component={ForgetPassWord} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    )



  }
}

export default App
