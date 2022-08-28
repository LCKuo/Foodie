import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';

WebBrowser.maybeCompleteAuthSession();

export default function Landing(props) {

    useEffect(() => {
        async () => {
            try {
                const aa = JSON.parse(resp)
                await AsyncStorage.setItem("name", aa.name ? aa.name : 'Nnone')
                await AsyncStorage.setItem("picture", aa.picture ? aa.picture : "Pnone")
                await AsyncStorage.setItem("email", aa.email ? aa.email : "Enone")
                await AsyncStorage.setItem("local", aa.local ? aa.local : "Lnone")
                await AsyncStorage.setItem("login", "1")
                props.doLin()
            } catch (err) {
                alert(err)
            }
        }
    }, [

    ])

    const [resp, setResp] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [requestG, responseG, promptAsyncG] = Google.useAuthRequest({
        expoClientId: 'x',
        iosClientId: 'xx',
        androidClientId: '506129948022-iuou972u0c9frtqrt28un6hs40igf4u6.apps.googleusercontent.com',
        webClientId: 'x',
    });
    useEffect(
        () => {

            if (responseG?.type === 'success') {
                const { authentication } = responseG;
                //console.log(authentication)
                console.log('atoken=' + authentication.accessToken)
                axios.get('https://www.googleapis.com/oauth2/v3/userinfo?access_token=' + authentication.accessToken)
                    .then(function (response) {
                        const userDetails = response.data;
                        console.log(userDetails);
                        const dd = JSON.stringify(userDetails);
                        setResp(dd);
                    })
            }

        }, [responseG]);

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>{resp ? JSON.parse(resp).name : "none"}...</Text>
            <Text>{resp}...</Text>

            <Button
                disabled={!requestG}
                title="Google"
                onPress={() => {
                    promptAsyncG();
                }}
            />
            <Button
                disabled={!requestG}
                title="lin"
                onPress={() => {
                    props.doLin()
                }}
            />
            <Button
                disabled={!requestG}
                title="Lout"
                onPress={() => {
                    props.doLout()
                }}
            />
        </View>
    )
}
