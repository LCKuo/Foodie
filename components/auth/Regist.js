import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Registration } from '../lib';
export default function Regist({ navigation }) {

    const [ID, setID] = React.useState('');
    const [Pw, setPw] = React.useState('');
    const [Pw2, setPw2] = React.useState('');
    const [emaim, setEmaim] = React.useState('');
    const [invite, setInvite] = React.useState('');

    const submit = () => {
        if (ID && Pw && Pw2 && emaim) {
            if (emaim.Email.includes("@")) {
                if (Pw === Pw2) {
                    Registration(ID, Pw, emaim, invite)
                    navigation.navigate('Waiting', { ID: ID, Pw: Pw })
                } else {
                    alert('請確認密碼一致!')
                }
            } else {
                alert('請輸入正確信箱!')
            }
        } else {
            let log = ""
            log += ID === "" ? "請輸入名稱\n" : ""
            log += Pw === "" ? "請輸入Pw1\n" : ""
            log += Pw2 === "" ? "請輸入Pw2\n" : ""
            log += emaim === "" ? "請輸入Email\n" : ""
            alert(log)
        }
    }
    return (

        <ImageBackground source={require('./assets/bg2.png')} style={{ flex: 1, justifyContent: 'center' }}>

            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>REGISTER</Text>

                <TextInput
                    onChangeText={Name => setID(Name)}
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
                    onChangeText={Email => setEmaim({ Email })}
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
                    onChangeText={Password1 => setPw(Password1)}
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
                    onChangeText={Password2 => setPw2(Password2)}
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
                    onChangeText={Invite => setInvite({ Invite })}
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
