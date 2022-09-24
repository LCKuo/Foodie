import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { _setLogin } from '../lib';
import { login, data, Reward_Data } from '../lib';
const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};
export default function Waiting({ navigation, route }) {
    submit()
    function submit() {
        login(route.params.ID, route.params.Pw)
        if (data.User_Token && Reward_Data) {
            wait(500).then(() => {
                navigation.navigate('Main', {})
            })
        } else {
            wait(500).then(() => {
                submit()
            })
        }
    };
    return (
        <ImageBackground source={require('./assets/emailConfirmation.png')} style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}></Text>
            </View>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
