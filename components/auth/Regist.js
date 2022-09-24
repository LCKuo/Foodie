import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Registration } from '../lib';

export default function Regist({ navigation }) {
    let _id = ""
    let _pw = ""
    let _pw2 = ""
    let _email = ""
    let _invite = ""
    const submit = () => {
        if (_id && _pw && _pw2 && _email) {
            if (_email.includes("@")) {
                if (_pw === _pw2) {
                    Registration(_id, _pw, _email, _invite)
                    navigation.navigate('Waiting', { ID: _id, Pw: _pw })

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
                <Text style={{ fontSize: 30 }}>REGISTER</Text>

                <TextInput
                    onChangeText={Name => { _id = Name }}
                    placeholder="Name"
                    style={{
                        backgroundColor: '#efefef',
                        padding: 10,
                        width: '70%',
                        marginTop: 10,
                        fontSize: 18,
                    }}
                />
                <TextInput
                    onChangeText={Email => { _email = Email }}
                    placeholder="Email"
                    style={{
                        backgroundColor: '#efefef',
                        padding: 10,
                        width: '70%',
                        marginTop: 10,
                        fontSize: 18,
                    }}
                />

                <TextInput
                    onChangeText={Password1 => { _pw = Password1 }}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={{
                        backgroundColor: '#efefef',
                        padding: 10,
                        width: '70%',
                        marginTop: 10,
                        fontSize: 18,
                    }}
                />
                <TextInput
                    onChangeText={Password2 => { _pw2 = Password2 }}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    style={{
                        backgroundColor: '#efefef',
                        padding: 10,
                        width: '70%',
                        marginTop: 10,
                        fontSize: 18,
                    }}
                />

                <TextInput
                    onChangeText={Invite => { _invite = Invite }}
                    placeholder="Invite code"
                    style={{
                        backgroundColor: '#efefef',
                        padding: 10,
                        width: '70%',
                        marginTop: 10,
                        fontSize: 18,
                    }}
                />

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
                            REGISTER
                        </Text>
                    </View>
                    <View style={{ height: 300 }}></View>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>
                    already a user ?  </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('LoginPage', {}) }}>
                    <Text style={{ color: 'red' }}>login here</Text>
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
    },
});
