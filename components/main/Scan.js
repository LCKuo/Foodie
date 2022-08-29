import { StyleSheet, Text, View, Button } from 'react-native';
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
        //setScanned(false);
        alert(`類型:${type} 資料:${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            {scanned && <BarCodeScanner
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
