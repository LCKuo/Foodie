import React from 'react'
import { View, Text, Button, Image, StyleSheet, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const image = { uri: "https://reactjs.org/logo-og.png" };

export default function ProfileF(props) {
    function onLogout() {
        clearState();
    }

    const clearState = async () => {
        try {
            await AsyncStorage.clear()
            props.doLout(true)
        } catch (e) { }
    };

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: props.picture }} style={styles.profilePic} />
                <Text style={styles.text}>
                    <Text>{props.name}</Text>
                    <Text>{props.email}</Text>
                    <Button
                        onPress={onLogout}
                        title="Logout"
                    />
                </Text>
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    profilePic: {
        width: 150,
        height: 150
    },
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