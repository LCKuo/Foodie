//https://reactnavigation.org/

import React, { Component } from 'react'
import { View, Text } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//https://oblador.github.io/react-native-vector-icons/
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

import FeedScreen from './main/Feed';
import ProfileScreen from './main/Profile';




const EmptyScreen = () => {
    return (null)
}
export class Main extends Component {

    render() {
        return (
            <Tab.Navigator initalRouteName="Feed" labeled={false}>
                <Tab.Screen name="Feed" component={FeedScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                    headerShown: false,
                }} />
                <Tab.Screen name="AddContainer" component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add")
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="camera" color={color} size={26} />
                        ),
                        headerShown: false,
                    }} labeled={false} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                    headerShown: false,
                }} labeled={false} />
            </Tab.Navigator>
        )
    }
}


export default Main;