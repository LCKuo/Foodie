import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Collapsible from 'react-native-collapsible';
import BottomSheet from '@gorhom/bottom-sheet';

export default function FeedLevel2({ navigation }) {

    const bottomSheetRef = useRef < BottomSheet > (null);
    const [coll1, setColl1] = React.useState(false);
    const [coll2, setColl2] = React.useState(false);

    clickBtn = (val) => {
        console.log(12333)
        navigation.goBack();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF3E3' }}>

            <View style={{ width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row' }}>
                <TouchableOpacity onPress={clickBtn} style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_back.png')} />
                </TouchableOpacity>
                <View style={{ width: '100%', position: 'absolute', left: 0, top: 0, bottom: 0, right: 0, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Text style={{ fontSize: 25, color: '#FFF3E3', textShadowColor: "#000000", textShadowRadius: 6, textShadowOffset: { width: -1, height: 1 } }}>咖啡館</Text> */}
                </View>
                <TouchableOpacity onPress={clickBtn} style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_love.png')} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={{ width: '100%', height: undefined, aspectRatio: 1 / 1, paddingLeft: 8, paddingRight: 8 }}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 16 }} source={require('./assets/demo2.png')} />
                </View>

                <View style={{ width: '100%', justifyContent: 'flex-start', flexDirection: 'column', paddingLeft: 8, paddingRight: 8 }}>
                    <Text style={{ fontSize: 25, color: '#000' }}>Collection name</Text>
                    <Text style={{ fontSize: 25, color: '#000' }}>item name</Text>
                    <View style={{ width: '100%', height: 48 }}></View>
                    <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 25, color: '#000' }}>item description</Text>
                        <TouchableOpacity onPress={() => { setColl1(!coll1) }} style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_arrow_down.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', height: 4 }}></View>
                    <View style={{ width: '100%', backgroundColor: '#F48037', height: 4 }}></View>

                    <Collapsible collapsed={!coll1} style={{ width: '100%' }}>
                        <View style={{ width: '100%', height: 4 }}></View>
                        <Text style={{ fontSize: 16, color: '#000' }}>item descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem descriptionitem description</Text>
                    </Collapsible>

                    <View style={{ width: '100%', height: 16 }}></View>
                    <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 25, color: '#000' }}>properties</Text>
                        <TouchableOpacity onPress={() => { setColl2(!coll2) }} style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_arrow_down.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', height: 4 }}></View>
                    <View style={{ width: '100%', backgroundColor: '#F48037', height: 4 }}></View>
                    <Collapsible collapsed={!coll2} style={{ width: '100%' }}>
                        <View style={{ width: '100%', height: 4 }}></View>
                        <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 1, aspectRatio: 516 / 270 }}>
                                <ImageBackground source={require('./assets/btn2.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.text}>開始使用</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <View style={{ width: 16 }}></View>
                            <TouchableOpacity style={{ flex: 1, aspectRatio: 516 / 270 }}>
                                <ImageBackground source={require('./assets/btn2.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.text}>開始使用</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 1, aspectRatio: 516 / 270 }}>
                                <ImageBackground source={require('./assets/btn2.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.text}>開始使用</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <View style={{ width: 16 }}></View>
                            <TouchableOpacity style={{ flex: 1, aspectRatio: 516 / 270 }}>
                                <ImageBackground source={require('./assets/btn2.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.text}>開始使用</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </Collapsible>
                </View>
            </ScrollView>

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