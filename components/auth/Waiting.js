import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { _setLogin, isLogin } from '../lib';
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
        <ImageBackground source={require('./assets/bg2.png')} style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>等待認證信</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={submit}
                    style={{ width: '100%' }}>
                    <View
                        style={{
                            backgroundColor: 'red',
                            padding: 14,
                            marginTop: 10,
                            width: '50%',
                            marginLeft: '5%',
                            alignSelf: 'center'
                        }}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>
                            驗證
                        </Text>
                    </View>
                </TouchableOpacity>
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
