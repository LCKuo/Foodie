//https://reactnavigation.org/

import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//https://oblador.github.io/react-native-vector-icons/
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import FeedScreen from './main/Feed';
import ProfileScreen from './main/Profile';
import Search from './main/Search';
import Market from './main/Market';


const EmptyScreen = () => {
    return (null)
}
export default function Main(props) {

    Combine = () => {
        return (
            <>
                <ProfileScreen
                    doLout={props.doLout}
                    name={props.name}
                    picture={props.picture}
                    email={props.email}
                />
            </>
        );
    }
    return (
        <Tab.Navigator initalRouteName="Feed" labeled={false}>
            <Tab.Screen name="Feed" component={FeedScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
                headerShown: false,
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="store-search" color={color} size={26} />
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


            <Tab.Screen name="Market" component={Market} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="basket" color={color} size={26} />
                ),
                headerShown: false,
            }} />
            <Tab.Screen
                name="Profile"
                component={Combine}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                    headerShown: false,
                }} labeled={false} />
        </Tab.Navigator>
    );

}

