import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function SearchLevel3({ navigation, route }) {

    const { modelData, otherParam } = route.params;

    clickBack = () => {
        navigation.goBack();
    };

    clickLove = () => {
        console.log(modelData)
    };

    clickLocation = () => {
    };

    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#FFF3E3' }}>

            <View style={{ marginTop: 0, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row' }}>
                <TouchableOpacity onPress={clickBack} style={{ width: 50, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_back.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={clickLove} style={{ width: 50, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_love.png')} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.cardShadow, { left: '3%', width: '94%', height: undefined, aspectRatio: 4 / 3, backgroundColor: 'rgba(253, 237, 250, 0.77)', borderRadius: 16, borderColor: '#000', borderWidth: 1 }]}>
                <View style={{ width: '100%', height: '100%', flexDirection: 'column' }} >
                    <Image style={{ flex: 4, width: '100%', resizeMode: 'contain', borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }} source={require('./assets/demo1.jpg')} />
                </View>
            </TouchableOpacity>

            <View style={{ left: '3%', width: '94%', justifyContent: 'center', flexDirection: 'column' }}>
                <Text style={{ fontSize: 22, marginTop: 16 }}>{modelData.title}</Text>
                <Text style={{ fontSize: 16, marginTop: 16 }}>{modelData.desc}</Text>
                <View style={{ backgroundColor: '#f00', height: 2, width: '100%', marginTop: 16 }}></View>
                <View style={{ marginTop: 8, height: 32, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={clickLocation} style={{ height: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_location.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 8 }}>Location</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    image: {
        width: 28,
        height: 28,
        resizeMode: 'stretch'
    },
    cardShadow: {
        shadowColor: '#aaa',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 1.5,
        elevation: 1.5,
    },
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    screen: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
    }
});