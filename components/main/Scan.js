import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scan() {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(true);
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

    const createTwoButtonAlert = (type, data) =>
        Alert.alert(
            `Scan a QR type : ${type}`,
            `You have scaned : ${data}`,
            [
                {
                    text: "OK", onPress: () => {
                        setScanned(true)
                    }
                }
            ]
        );



    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            {<BarCodeScanner
                onBarCodeScanned={!scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
