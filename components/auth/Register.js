import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'



export default function Regist() {
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [pwd, setPwd] = React.useState("")

    function onSignUp() {

    }
    return (
        <View>
            <TextInput
                placeholder='Name'
                onChangeText={setName}
            />

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
                onPress={onSignUp}
                title="sign up"
            />
        </View>
    )

}

