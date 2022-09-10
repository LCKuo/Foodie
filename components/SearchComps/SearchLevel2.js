import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "網美咖啡館",
        desc: "康寶藍真的很好喝，我還是第一次喝，就在這家亞洲50大好喝的咖啡廳喝到，真的很幸運，一點也沒有濃縮咖啡的苦味，也沒有鮮奶油的甜膩，一切配合得恰到好處，台灣真的很棒，很多一直朝著自己目標努力的人，一直被看見，包含這家咖啡店，對老闆有興趣的可以自己去谷歌，有些創業史介紹！推薦給大家，讓好店一直好下去～ 也可以讓我們一直可以大聲的說，我在喝咖啡或是在前往咖啡店的路上，享受著美好咖啡"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
        desc: "康寶藍真的很好喝，我還是第一次喝，就在這家亞洲50大好喝的咖啡廳喝到，真的很幸運，一點也沒有濃縮咖啡的苦味，也沒有鮮奶油的甜膩，一切配合得恰到好處，台灣真的很棒，很多一直朝著自己目標努力的人，一直被看見，包含這家咖啡店，對老闆有興趣的可以自己去谷歌，有些創業史介紹！推薦給大家，讓好店一直好下去～ 也可以讓我們一直可以大聲的說，我在喝咖啡或是在前往咖啡店的路上，享受著美好咖啡"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
        desc: "康寶藍真的很好喝，我還是第一次喝，就在這家亞洲50大好喝的咖啡廳喝到，真的很幸運，一點也沒有濃縮咖啡的苦味，也沒有鮮奶油的甜膩，一切配合得恰到好處，台灣真的很棒，很多一直朝著自己目標努力的人，一直被看見，包含這家咖啡店，對老闆有興趣的可以自己去谷歌，有些創業史介紹！推薦給大家，讓好店一直好下去～ 也可以讓我們一直可以大聲的說，我在喝咖啡或是在前往咖啡店的路上，享受著美好咖啡"
    },
];

const Item = ({ item, onPress, backgroundColor, textColor, title, navigation }) => (
    <View>
        <TouchableOpacity onPress={() => { navigation.navigate('SearchLevel3', { modelData: item }) }} style={[styles.cardShadow, { left: '3%', width: '94%', flex: 1, height: undefined, aspectRatio: 4 / 3, backgroundColor: 'rgba(253, 237, 250, 0.77)', borderRadius: 16, borderColor: '#000', borderWidth: 1 }]}>
            <View style={{ width: '100%', height: '100%', flexDirection: 'column' }} >
                <Image style={{ flex: 4, width: '100%', resizeMode: 'contain', borderTopLeftRadius: 16, borderTopRightRadius: 16 }} source={require('./assets/demo1.jpg')} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, }}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
        <Text numberOfLines={3} ellipsizeMode={'tail'} style={{ left: '3%', width: '94%', fontSize: 15, flex: 1 }}>{item.desc}</Text>
        <View style={{ height: 24 }}></View>
    </View>
);

export default function SearchLevel2({ navigation }) {

    const renderItem = ({ item }) => (
        <Item navigation={navigation} item={item} title={item.title} />
    );

    clickBtn = (val) => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF3E3' }}>

            <View style={{ width: '100%', height: 50 }}>
                <TouchableOpacity onPress={clickBtn} style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 32, height: 32 }} source={require('./assets/icon_back.png')} />
                </TouchableOpacity>
                <View style={{ width: '100%', position: 'absolute', left: 0, top: 0, bottom: 0, right: 0, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, color: '#FFF3E3', textShadowColor: "#000000", textShadowRadius: 6, textShadowOffset: { width: -1, height: 1 } }}>咖啡館</Text>
                </View>
            </View>

            <FlatList style={{ flex: 1 }}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}

            />

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