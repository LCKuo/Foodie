import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Welcome({ navigation }) {

    clickBtn = (val) => {
        console.log(12333)
        navigation.navigate('Tab');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '100%', height: '100%', top: '0%', left: '0%', }} source={require('./assets/welcome.png')} />

                <TouchableOpacity style={{ width: '85%', aspectRatio: 861 / 138, top: '22%' }} onPress={clickBtn}>
                    <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>開始使用</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
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