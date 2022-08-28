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

    const getEmail = async () => {
        try {
            const name = await AsyncStorage.getItem("name")
            const picture = await AsyncStorage.getItem("picture")
            const email = await AsyncStorage.getItem("email")
            const local = await AsyncStorage.getItem("local")

            setname(name)
            setpicture(picture)
            setemail(email)
            setlocal(local)
        } catch (err) {
            alert(err)
        }
    }
    getEmail()
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>"</Text>

            <Image
                style={styles.tinyLogo}
                source={{
                    uri: picture ? { picture } : "https://reactnative.dev/img/tiny_logo.png",
                }}
            />
            <Text>"</Text>

            <Text>{name ? name : "undefine"}</Text>
            <Text>{email ? email : "undefine"}</Text>
            <Text>{local ? local : "undefine"}</Text>
        </View>
    )
}
