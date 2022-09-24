import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import image from "./pngs/bg2.png";

export default function Market() {
    return (

        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Browse Web Content</Text>
            </ImageBackground>
        </View>
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
        fontSize: 32,
        lineHeight: 75,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});