import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Setting({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.container} source={require('./assets/bg3.png')} >
                <View style={{ flex: 2 }}></View>

                <View style={{ backgroundColor: 'transparent', flex: 10, alignSelf: 'stretch' }}>
                    <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '96%', height: '90%', top: '5%', left: '2%', }} source={require('./assets/hand-drawn-ui.png')} />
                    <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '37%', height: undefined, aspectRatio: 390 / 269, top: '6%', left: '3%', }} source={require('./assets/tab1_1.png')} />
                    <View style={{ position: 'absolute', width: '45%', height: '100%', top: '0%', left: '42%', flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 25, color: '#FFF3E3', textShadowColor: "#000000", textShadowRadius: 6, textShadowOffset: { width: -1, height: 1 } }}>咖啡館</Text>
                    </View>
                    <View style={{ position: 'absolute', width: '25%', height: '100%', top: '0%', right: '0%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('SearchLevel2', {}) }} style={{ width: 64, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_arrow_right.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 2 }}></View>

                <View style={{ backgroundColor: 'transparent', flex: 10, alignSelf: 'stretch' }}>
                    <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '96%', height: '90%', top: '5%', left: '2%', }} source={require('./assets/hand-drawn-ui.png')} />
                    <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '37%', height: undefined, aspectRatio: 414 / 265, top: '2%', left: '3%', }} source={require('./assets/tab1_2.png')} />
                    <View style={{ position: 'absolute', width: '45%', height: '100%', top: '0%', left: '42%', flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 25, color: '#FFF3E3', textShadowColor: "#000000", textShadowRadius: 6, textShadowOffset: { width: -1, height: 1 } }}>早餐店</Text>
                    </View>
                    <View style={{ position: 'absolute', width: '25%', height: '100%', top: '0%', right: '0%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('SearchLevel2', {}) }} style={{ width: 64, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_arrow_right.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 2 }}></View>

                <View style={{ backgroundColor: 'transparent', flex: 10, alignSelf: 'stretch' }}>
                    <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '96%', height: '90%', top: '5%', left: '2%', }} source={require('./assets/hand-drawn-ui.png')} />
                    <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '30%', height: undefined, aspectRatio: 290 / 310, top: '-8%', left: '3%', }} source={require('./assets/tab1_3.png')} />
                    <View style={{ position: 'absolute', width: '45%', height: '100%', top: '0%', left: '42%', flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 25, color: '#FFF3E3', textShadowColor: "#000000", textShadowRadius: 6, textShadowOffset: { width: -1, height: 1 } }}>甜品店</Text>
                    </View>
                    <View style={{ position: 'absolute', width: '25%', height: '100%', top: '0%', right: '0%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('SearchLevel2', {}) }} style={{ width: 64, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_arrow_right.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 2 }}></View>

                <View style={{ backgroundColor: 'transparent', flex: 10, alignSelf: 'stretch' }}>
                    <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '96%', height: '90%', top: '5%', left: '2%', }} source={require('./assets/hand-drawn-ui.png')} />
                    <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '30%', height: undefined, aspectRatio: 290 / 294, top: '-2%', left: '3%', }} source={require('./assets/tab1_4.png')} />
                    <View style={{ position: 'absolute', width: '45%', height: '100%', top: '0%', left: '42%', flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 25, color: '#FFF3E3', textShadowColor: "#000000", textShadowRadius: 6, textShadowOffset: { width: -1, height: 1 } }}>餐館</Text>
                    </View>
                    <View style={{ position: 'absolute', width: '25%', height: '100%', top: '0%', right: '0%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('SearchLevel2', {}) }} style={{ width: 64, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_arrow_right.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 2 }}></View>

                <View style={{ backgroundColor: 'transparent', flex: 10, alignSelf: 'stretch' }}>
                    <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '96%', height: '90%', top: '5%', left: '2%', }} source={require('./assets/hand-drawn-ui.png')} />
                    <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '34%', height: undefined, aspectRatio: 325 / 286, top: '-2%', left: '3%', }} source={require('./assets/tab1_5.png')} />
                    <View style={{ position: 'absolute', width: '45%', height: '100%', top: '0%', left: '42%', flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 25, color: '#FFF3E3', textShadowColor: "#000000", textShadowRadius: 6, textShadowOffset: { width: -1, height: 1 } }}>麵包店</Text>
                    </View>
                    <View style={{ position: 'absolute', width: '25%', height: '100%', top: '0%', right: '0%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('SearchLevel2', {}) }} style={{ width: 64, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_arrow_right.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 10 }}></View>

            </ImageBackground>
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    image: {
        width: 28,
        height: 28,
        resizeMode: 'stretch'
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    screen: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
    },
});