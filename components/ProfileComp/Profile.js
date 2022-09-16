import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableOpacity, ImageBackground, Dimensions, useWindowDimensions, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Divider } from 'react-native-paper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { userName } from '../auth/Landing';
import { AsyncStorage } from 'react-native';

const { width } = Dimensions.get('window');

export default function Profile(props) {
    clickSetting = () => {
        Alert.alert(
            "您正在登出",
            "請確認是否登出?",
            [
                {
                    text: "確認", onPress: () => {
                        onLogout()
                    }
                }, {
                    text: "取消", onPress: () => {
                    }
                }
            ]

        );
    }
    const window = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'NFT' },
        { key: 'second', title: 'LIKES' },
        { key: 't3', title: 'CARD' },
    ]);

    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'rgba(78,55,178,1)'}
            inactiveColor={'#DE8A20'}
            indicatorStyle={{ backgroundColor: '#DE8A20', height: '100%', borderColor: '#000', borderWidth: 1, borderRadius: 4 }}
            indicatorContainerStyle={{ height: '100%', width: '100%' }}
            style={{ backgroundColor: '#FFF3E3' }}
            // tabStyle={{ backgroundColor: '#FFF3E3'}} // here
            renderLabel={({ route, focused, color }) => (
                <Text style={{ color: 'black', margin: 8 }}>
                    {route.title}
                </Text>
            )}
        />
    );
    function onLogout() {
        clearState();
    }

    const clearState = async () => {
        try {
            await AsyncStorage.clear()
            props.doLout(true)
        } catch (e) {
            alert(`cleaning error ${e}`)
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#FFF3E3' }]} >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <View style={{ width: '100%', alignItems: 'center', paddingTop: 16 }}>
                    <TouchableOpacity style={{ width: window.width * 0.4, height: undefined, aspectRatio: 1 / 1, backgroundColor: '#F48037', borderRadius: window.width * 0.4 / 2, padding: 4 }} onPress={() => { }}>
                        <ImageBackground source={{ uri: props.picture }} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: window.width * 0.4 / 2, overflow: 'hidden' }}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={{ color: '#2E1A47', fontSize: 25, textAlign: 'center' }}>{userName}</Text>

                    <TouchableOpacity onPress={() => { clickSetting() }} style={{ position: 'absolute', right: 4, top: 0, width: 64, height: 64, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_setting.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <TabView
                style={{ flex: 1, width: '100%', height: '100%', marginTop: 16, paddingLeft: 8, paddingRight: 8 }}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                swipeEnabled={false}
                renderTabBar={renderTabBar}
                initialLayout={{ width: window.width }}
            />
        </SafeAreaView >

    )
}


function FirstRoute({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF3E3' }} >
            <ScrollView
                onLayout={(event) => {
                    var { x, y, width, height } = event.nativeEvent.layout;
                    // setScrollViewH(height);
                }}
                style={{ aspectRatio: 1 / 1, width: '100%', height: undefined, marginTop: 8 }}
                // ref={scrollView}
                pagingEnabled={false}
                horizontal={true}
                contentInset={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }}>
                {[1, 2, 3, 3, 3, 3, 3].map((answer, i) => {
                    return (
                        <View style={[styles.swiper_view, { width: width }]}>
                            <TouchableOpacity style={{ width: '100%', height: '100%', paddingLeft: 0, paddingRight: 0 }} onPress={() => { }}>
                                <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 16 }} source={require('./assets/demo2.png')} />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: FirstRoute,
    t3: SecondRoute,
});







const styles = StyleSheet.create({
    profilePic: {
        width: 150,
        height: 150
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});