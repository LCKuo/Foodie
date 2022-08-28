import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'




export default function Login() {
    const [email, setEmail] = React.useState("")
    const [pwd, setPwd] = React.useState("")

    function onLogin() {
    }
    return (
        <View>
            <TextInput
                placeholder='email'
                onChangeText={setEmail}
            />

            <TextInput
                placeholder='password'
                secureTextEntry={true}
                onChangeText={setPwd}
            />

            <Button
                onPress={onLogin}
                title="Login"
            />
        </View>
    )

}

