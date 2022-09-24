import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { resetPassword } from '../lib';
export default function ForgetPassWord({ navigation }) {

    let _email = ""

    const submit = () => {
        if (_email) {
            resetPassword(_email)
            navigation.navigate('LoginPage')
            alert('已寄送密碼重設郵件!')
        } else {
            alert('請輸入信箱!')
        }
    };
    return (

        <ImageBackground source={require('./assets/bg2.png')} style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 10 }}> </Text>
                <TextInput
                    onChangeText={Email => { _email = Email }}
                    placeholder="Email"
                    style={{
                        backgroundColor: '#ffffff',
                        padding: 10,
                        width: '85%',
                        marginTop: 10,
                        fontSize: 18,
                        borderRadius: 15
                    }}
                />
                <Text style={{ marginTop: 70, fontSize: 13 }}>Use your account email address.</Text>
                <Text style={{ marginTop: 0, fontSize: 13 }}>If account was registrated before</Text>
                <Text style={{ marginTop: 0, fontSize: 13 }}>you will get new password</Text>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={submit}
                    style={{ width: '75%', aspectRatio: 861 / 138, top: '16%' }}>
                    <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>重設</Text>
                    </ImageBackground>
                </TouchableOpacity>

            </View >

        </ImageBackground >
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
        marginTop: 100
    },
    text: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
    },
});
