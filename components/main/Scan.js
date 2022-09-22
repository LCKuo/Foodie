import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { reward, _setToken } from '../lib';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Scan() {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(true);
    const [showD, setshowD] = React.useState(true);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        if (scanned) {
            setScanned(false)
            createTwoButtonAlert(type, data)
        }
    };

    const createTwoButtonAlert = (type, data) => {
        Alert.alert(
            `您已兌換`,
            `請點擊確認`,
            [
                {
                    text: "確認", onPress: () => {
                        reward(data)
                        setScanned(true)
                    }
                }
            ]
        );
    }



    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    if (showD) {
        return (<WelcomeA setshowD={setshowD} />)
    } else {
        return (
            <View style={styles.container}>
                {<BarCodeScanner
                    onBarCodeScanned={!scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



function WelcomeA(props) {

    const clickBtn1 = () => {
        props.setshowD(false)
    };
    return (
        <SafeAreaView style={stylesV.container}>
            <View style={stylesV.container}>
                <Image style={{ position: 'absolute', resizeMode: 'stretch', width: '100%', height: '100%', top: '0%', left: '0%', }} source={require('./assets/scan.png')} />

                <TouchableOpacity style={{ width: '85%', aspectRatio: 861 / 138, top: '22%' }} onPress={() => clickBtn1()}>
                    <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={stylesV.text}>開始使用</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </SafeAreaView >

    );
}

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
