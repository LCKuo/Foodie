import React, { useEffect } from 'react'
import { Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import image from "../main/pngs/login.png";
import { SafeAreaView } from 'react-native-safe-area-context';

WebBrowser.maybeCompleteAuthSession();
export var _userName_ = "FoodieVerse";
export var _picture_ = "http://foodieverse.s3.s3.amazonaws.com/static/512x512.png";

export default function Landing(props) {
    return (
        <SafeAreaView style={stylesV.container}>

            <View style={stylesV.container}>
                <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '100%', height: '100%', top: '0%', left: '0%', }} source={image} />

                <TouchableOpacity style={{ width: '85%', aspectRatio: 861 / 138, top: '22%' }} onPress={() => { props.doLin() }}>
                    <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={stylesV.text}>開始使用</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
    }
});
