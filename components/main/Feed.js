import React, { useState } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});
export default function Feed() {
    const [name, setname] = useState('');
    const [picture, setpicture] = useState('');
    const [email, setemail] = useState('');
    const [local, setlocal] = useState('');

    const getInfo = async () => {
        try {
            const _name = await AsyncStorage.getItem("name")
            const _picture = await AsyncStorage.getItem("picture")
            const _email = await AsyncStorage.getItem("email")
            const _local = await AsyncStorage.getItem("local")

            setname(_name)
            setpicture(_picture)
            setemail(_email)
            setlocal(_local)
        } catch (err) {
            alert(err)
        }
    }
    getInfo()
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: picture }} style={stylesA.profilePic} />
            <Text>{name ? name : "undefine name"}</Text>
            <Text>{email ? email : "undefine email"}</Text>
            <Text>{local ? local : "undefine local"}</Text>
        </View>
    )
}

const stylesA = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        width: 50,
        height: 50
    }
});
