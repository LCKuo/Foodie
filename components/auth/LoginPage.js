import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { startLogin, data, login } from '../lib';
const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};
export default function LoginPage({ navigation }) {

    let _id = ""
    let _pw = ""

    const checkLogin = () => {
        wait(300).then(() => {
            if (!startLogin) {
                if (data.User_Token) {
                    navigation.navigate('Main')
                } else {
                    navigation.navigate('Waiting', { ID: _id, Pw: _pw })
                }
            } else {
                checkLogin()
            }
        })
    }

    const submit = () => {
        if (_id && _pw) {
            login(_id, _pw)
            wait(100).then(() => {
                checkLogin()
            })
        } else {
            alert('請輸入帳號 和 密碼!')
        }
    };
    return (

        <ImageBackground source={require('./assets/bg2.png')} style={{ flex: 1, justifyContent: 'center' }}>

            <View style={styles.container}>
                <Text style={{ fontSize: 10 }}> </Text>

                <TextInput
                    onChangeText={Name => { _id = Name }}
                    placeholder="Name"
                    style={{
                        backgroundColor: '#ffffff',
                        padding: 10,
                        width: '85%',
                        marginTop: 10,
                        fontSize: 18,
                        borderRadius: 15
                    }}
                />
                <TextInput
                    onChangeText={Password1 => { _pw = Password1 }}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={{
                        backgroundColor: '#ffffff',
                        padding: 10,
                        width: '85%',
                        marginTop: 10,
                        fontSize: 18,
                        borderRadius: 15
                    }}
                />

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={submit}
                    style={{ width: '75%', aspectRatio: 861 / 138, top: '22%' }}>
                    <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>登入</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <View style={{ height: 500 }}></View>
                <Text style={{ textAlign: 'center', color: 'gray', fontSize: 14 }}>
                    忘記密碼 ?  </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('ForgetPassWord', {}) }}>
                    <Text style={{ color: 'gray', fontSize: 12, textDecorationLine: 'underline' }}>重設</Text>
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
    text: {
        color: "#3E1A00",
        fontSize: 24,
        fontWeight: "bold",
    },
});
