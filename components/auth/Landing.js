import React, { useEffect } from 'react'
import { Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import image from "../main/pngs/login.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import Waiting from './Waiting'
import Regist from './Regist'
import LandR from './LandR';
import LoginPage from './LoginPage'

WebBrowser.maybeCompleteAuthSession();
export var _userName_ = "FoodieVerse";
export var _picture_ = "http://foodieverse.s3.s3.amazonaws.com/static/512x512.png";
const Stack = createStackNavigator();

export default function Landing() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="LandR">
                    <Stack.Screen name="Regist" component={Regist} options={{ headerShown: true }} />
                    <Stack.Screen name="LandR" component={LandR} options={{ headerShown: true }} />
                    <Stack.Screen name="Waiting" component={Waiting} options={{ headerShown: true }} />
                    <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: true }} />

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}
