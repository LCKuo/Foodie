import React, { useEffect } from 'react'
import { Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import image from "../main/pngs/login.png";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function LandR({ navigation }) {
    return (
        <ImageBackground style={{ flex: 1, justifyContent: 'center' }}>
            <View style={stylesV.container}>
                <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '100%', height: '100%', top: '0%', left: '0%', }} source={image} />
                <TouchableOpacity style={{ marginTop: 30, width: '45%', height: '6%', top: '22%' }} onPress={() => { navigation.navigate('LoginPage', {}) }}>
                    <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={stylesV.text}>登入</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 15, width: '45%', height: '6%', top: '22%' }} onPress={() => { navigation.navigate('Regist', {}) }}>
                    <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={stylesV.text}>註冊</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});

const stylesV = StyleSheet.create({
    image: {
        width: 28,
        height: 28,
        resizeMode: 'stretch'
    },
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    screen: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "#3E1A00",
        fontSize: 24,
        fontWeight: "bold",
    }
});
