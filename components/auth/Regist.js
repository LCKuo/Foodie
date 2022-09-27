import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Registration, startReg, regError } from '../lib';
const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};
export default function Regist({ navigation }) {
    let _id = ""
    let _pw = ""
    let _pw2 = ""
    let _email = ""
    let _invite = ""

    const checkReg = () => {
        wait(300).then(() => {
            if (!startReg) {
                if (!regError) {
                    navigation.navigate('Waiting', { ID: _id, Pw: _pw })
                } else {
                    if (regError.username) {
                        alert(regError.username)
                    } else if (regError.email) {
                        alert(regError.email)
                    } else if (regError.password1) {
                        alert(regError.password1)
                    } else if (regError.invitation_code) {
                        alert(regError.invitation_code)
                    }
                }

            }
            else {
                checkReg()
            }
        })
    }
    const submit = () => {
        if (_id && _pw && _pw2 && _email) {
            if (_email.includes("@")) {
                if (_pw === _pw2) {
                    Registration(_id, _pw, _email, _invite)
                    wait(100).then(() => {
                        checkReg()
                    })
                } else {
                    alert('請確認密碼一致!')
                }
            } else {
                alert('請輸入正確信箱!')
            }
        }
    }
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
                <TextInput
                    onChangeText={Password2 => { _pw2 = Password2 }}
                    placeholder="Confirm Password"
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

                <TextInput
                    onChangeText={Invite => { _invite = Invite }}
                    placeholder="Invite code"
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
                    style={{ width: '75%', aspectRatio: 861 / 138, top: '2%' }}>
                    <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>註冊</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <View style={{ height: 300 }}></View>
                <Text style={{ textAlign: 'center', color: 'gray', fontSize: 14 }}>
                    已經是使用者?  </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('LoginPage', {}) }}>
                    <Text style={{ color: 'gray', fontSize: 12, textDecorationLine: 'underline' }}>點此登入</Text>
                </TouchableOpacity>

            </View >

        </ImageBackground >
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, text: {
        color: "#3E1A00",
        fontSize: 24,
        fontWeight: "bold",
    },
});
