import React from 'react'
import { View, Text, Button } from 'react-native'
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
            <Button
                onPress={onLogout}
                title="Logout"
            />

        </View>
    )
}

