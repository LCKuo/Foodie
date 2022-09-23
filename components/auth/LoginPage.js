import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function LoginPage({ navigation }) {

    let _id = ""
    let _pw = ""

    const submit = () => {
        if (_id && _pw) {
        } else {
            alert('請輸入帳號 和 密碼!')
        }
        navigation.navigate('Waiting', { ID: _id, Pw: _pw })
    };
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
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>登入</Text>
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
