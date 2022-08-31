import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

export default function Landing(props) {

    const restoreState = async (jsonFile) => {
        try {
            if (!jsonFile.error) {
                await AsyncStorage.setItem("name", jsonFile.name ? jsonFile.name : "")
                await AsyncStorage.setItem("picture", jsonFile.picture ? jsonFile.picture : "")
                await AsyncStorage.setItem("email", jsonFile.email ? jsonFile.email : "")
                await AsyncStorage.setItem("local", jsonFile.id ? jsonFile.id : "")
                props.doLin()
            } else {
                alert(JSON.stringify(jsonFile))
            }
        } catch (e) { }
    };

    const [userInfo, setUserInfo] = React.useState();
    const [requestG, responseG, promptAsyncG] = Google.useAuthRequest({
        expoClientId: 'x',
        iosClientId: 'xx',
        androidClientId: '1027851673622-bftlt6ubcsfisjje04rgn3g813ktran6.apps.googleusercontent.com',
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
                        setUserInfo(userDetails);
                        restoreState(userInfo)
                    })
            }

        }, [responseG]);


    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>{/*JSON.stringify(userInfo)*/}</Text>
            <Button
                title={"Login"}
                onPress={() => { promptAsyncG({ useProxy: false, showInRecents: true }) }}
            />
            <Button
                disabled={!requestG}
                title="Google"
                onPress={() => {
                    promptAsyncG();
                }}
            />
            <Button
                disabled={!requestG}
                title="ForceLogin"
                onPress={() => {
                    props.doLin();
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
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
