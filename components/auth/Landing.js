import React, { useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native'
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Landing({ navigation }) {

    useEffect(() => {
        async () => {
            try {
                await AsyncStorage.setItem("UserInfo", resp)
            } catch (err) {
                alert(err)
            }
        }
    }, [resp])

    const [resp, setResp] = useState('none');
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
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
                        console.log(userDetails);
                        const dd = JSON.stringify(userDetails);
                        setResp(dd);
                    })
            }

        }, [responseG]);

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
                disabled={!requestG}
                title="Google"
                onPress={() => {
                    promptAsyncG();
                }}
            />
            <Button
                title='登入'
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}
