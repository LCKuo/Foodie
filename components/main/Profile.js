import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile(props) {
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile</Text>
            <Image source={{ uri: props.picture }} style={styles.profilePic} />
            <Text>{props.name}</Text>
            <Text>{props.email}</Text>
            <Button
                onPress={onLogout}
                title="Logout"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    profilePic: {
        width: 50,
        height: 50
    }
});