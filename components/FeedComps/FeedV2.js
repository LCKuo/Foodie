import React, { useRef } from 'react';
import { Text, View, Image, StyleSheet, Button, ScrollView, Dimensions, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Collapsible from 'react-native-collapsible';
import BottomSheet from '@gorhom/bottom-sheet';
import { Dialog } from 'react-native-simple-dialogs';
import delayAsync from 'delay-async';

const { width } = Dimensions.get('window');

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "網美咖啡館",
        imgs: ['', '', '', '', '', '', '', '', ''],
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg',
        collapsed: false,
        btn1: ['權益1', '權益2'],
        btn2: ['優惠眷1', '優惠眷1'],
        desc: "康寶藍真的很好喝，我還是第一次喝，就在這家亞洲50大好喝的咖啡廳喝到，真的很幸運，一點也沒有濃縮咖啡的苦味，也沒有鮮奶油的甜膩，一切配合得恰到好處，台灣真的很棒，很多一直朝著自己目標努力的人，一直被看見，包含這家咖啡店，對老闆有興趣的可以自己去谷歌，有些創業史介紹！推薦給大家，讓好店一直好下去～ 也可以讓我們一直可以大聲的說，我在喝咖啡或是在前往咖啡店的路上，享受著美好咖啡"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "網美咖啡館",
        imgs: ['', '', '', '', '', '', '', '', ''],
        img: 'https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg',
        collapsed: false,
        btn1: ['權益11', '權益22'],
        btn2: ['優惠眷11', '優惠眷12'],
        desc: "康寶藍真的很好喝，我還是第一次喝，就在這家亞洲50大好喝的咖啡廳喝到，真的很幸運，一點也沒有濃縮咖啡的苦味，也沒有鮮奶油的甜膩，一切配合得恰到好處，台灣真的很棒，很多一直朝著自己目標努力的人，一直被看見，包含這家咖啡店，對老闆有興趣的可以自己去谷歌，有些創業史介紹！推薦給大家，讓好店一直好下去～ 也可以讓我們一直可以大聲的說，我在喝咖啡或是在前往咖啡店的路上，享受著美好咖啡"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "網美咖啡館",
        imgs: ['', '', '', '', '', '', '', '', ''],
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMAY3Z-205kWN7XF5u2F8GdNrSs6-RvcMOw&usqp=CAU',
        collapsed: false,
        btn1: ['權益111', '權益222'],
        btn2: ['優惠眷111', '優惠眷222'],
        desc: "康寶藍真的很好喝，我還是第一次喝，就在這家亞洲50大好喝的咖啡廳喝到，真的很幸運，一點也沒有濃縮咖啡的苦味，也沒有鮮奶油的甜膩，一切配合得恰到好處，台灣真的很棒，很多一直朝著自己目標努力的人，一直被看見，包含這家咖啡店，對老闆有興趣的可以自己去谷歌，有些創業史介紹！推薦給大家，讓好店一直好下去～ 也可以讓我們一直可以大聲的說，我在喝咖啡或是在前往咖啡店的路上，享受著美好咖啡"
    }
];

function CollapsibleItem({ navigation, collapsed, data, setshowDialog1 }) {

    const [coll, setCollapsed] = React.useState(collapsed);
    const [collHeaderH, setCollHeaderH] = React.useState(null);

    const clickColl = ({ item }) => {
        // console.log(window.getComputedStyle(ReactDOM.findDOMNode(this.refs.refCollHeaderH)).getPropertyValue("height"))
        console.log(`cupon : ${collHeaderH}`)
        setCollapsed(!coll)
    };

    const clickBtn1 = ({ item }) => {
        setshowDialog1(true)
    };

    return (
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: '96%' }}>
            {/* 水豚圖 */}
            <Image style={{ zIndex: 3, resizeMode: 'stretch', width: 142, height: undefined, aspectRatio: 1 / 1, marginLeft: 8 }} source={require('./assets/coll1.png')} />
            {/* absolute文字標題 */}
            <View style={{ zIndex: 2, position: 'absolute', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, right: '0%', flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={{ marginLeft: 160, fontSize: 22, color: '#FFF3E3', textShadowColor: "#000000", textShadowRadius: 6, textShadowOffset: { width: -1, height: 1 } }}>我的權益</Text>
            </View>
            {/* absolute下拉箭頭icon */}
            <View onLayout={(event) => {
                var { x, y, width, height } = event.nativeEvent.layout;
                setCollHeaderH(height);
            }} style={{ zIndex: 2, position: 'absolute', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, right: '0%', flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity onPress={clickColl} style={{ marginRight: 16 }}>
                    <Image style={{ width: 40, height: 40, resizeMode: 'stretch' }} source={require('./assets/icon_arrow_down.png')} />
                </TouchableOpacity>
            </View>
            {/* absolute文字標題背景 */}
            <Image style={{ zIndex: 1, position: 'absolute', resizeMode: 'stretch', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, left: '0%', }} source={require('./assets/hand-drawn-ui.png')} />
            {/* 下半摺疊選單 */}
            <Collapsible collapsed={!coll} style={{ width: '100%', height: undefined, aspectRatio: 1071 / 789, zIndex: 8, backgroundColor: 'red', marginTop: -collHeaderH }}>
                <Image style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', resizeMode: 'stretch', zIndex: 0 }} source={require('./assets/coll_bg.png')} />
                <View style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: collHeaderH }}>

                    {data.btn1.map((d, i) => {
                        return (
                            <TouchableOpacity onPress={clickBtn1} style={{ width: '85%', aspectRatio: 861 / 138 }}>
                                <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.text}>{d}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    })}

                </View>
                {/* <View style={{ zIndex: 0, width: '100%', height: undefined, aspectRatio: 1071 / 789, flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'blue', marginTop: -collHeaderH, zIndex: 0 }}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/coll_bg.png')} />
                </View> */}
            </Collapsible>


        </View>
    );
}

function CollapsibleItem2({ navigation, collapsed, data, setshowDialog2 }) {

    const [coll, setCollapsed] = React.useState(collapsed);
    const [collHeaderH, setCollHeaderH] = React.useState(null);

    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    }

    // const renderListItem = ({ item }) => (
    //     <Item navigation={navigation} item={item} title={item.title} />
    // );

    const clickColl = ({ }) => {
        // console.log(window.getComputedStyle(ReactDOM.findDOMNode(this.refs.refCollHeaderH)).getPropertyValue("height"))
        console.log(collHeaderH)
        setCollapsed(!coll)
    };

    const clickBtn1 = ({ }) => {
        setshowDialog2(true)
    };

    return (
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: '96%' }}>
            {/* 水豚圖 */}
            <Image style={{ zIndex: 3, resizeMode: 'stretch', width: 142, height: undefined, aspectRatio: 1 / 1, marginLeft: 8 }} source={require('./assets/coll2.png')} />
            {/* absolute文字標題 */}
            <View style={{ zIndex: 2, position: 'absolute', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, right: '0%', flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={{ marginLeft: 160, fontSize: 22, color: '#FFF3E3', textShadowColor: "#000000", textShadowRadius: 6, textShadowOffset: { width: -1, height: 1 } }}>我的優惠卷</Text>
            </View>
            {/* absolute下拉箭頭icon */}
            <View onLayout={(event) => {
                var { x, y, width, height } = event.nativeEvent.layout;
                setCollHeaderH(height);
            }} style={{ zIndex: 2, position: 'absolute', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, right: '0%', flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity onPress={clickColl} style={{ marginRight: 16 }}>
                    <Image style={{ width: 40, height: 40, resizeMode: 'stretch' }} source={require('./assets/icon_arrow_down.png')} />
                </TouchableOpacity>
            </View>
            {/* absolute文字標題背景 */}
            <Image style={{ zIndex: 1, position: 'absolute', resizeMode: 'stretch', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, left: '0%', }} source={require('./assets/hand-drawn-ui.png')} />
            {/* 下半摺疊選單 */}
            <Collapsible collapsed={!coll} style={{ width: '100%', height: undefined, aspectRatio: 1071 / 789, zIndex: 8, backgroundColor: 'red', marginTop: -collHeaderH }}>
                <Image style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', resizeMode: 'stretch', zIndex: 0 }} source={require('./assets/coll_bg.png')} />
                <View style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: collHeaderH }}>
                    {data.btn2.map((d, i) => {
                        return (
                            <TouchableOpacity onPress={clickBtn1} style={{ width: '85%', aspectRatio: 861 / 138 }}>
                                <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.text}>{d}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                {/* <View style={{ zIndex: 0, width: '100%', height: undefined, aspectRatio: 1071 / 789, flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'blue', marginTop: -collHeaderH, zIndex: 0 }}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/coll_bg.png')} />
                </View> */}
            </Collapsible>


        </View>
    );
}

export default function FeedV2({ navigation }) {

    // ref
    const bottomSheetRef = useRef(null);
    const bottomSheetRefCoupon = useRef(null);
    const [ScrollViewH, setScrollViewH] = React.useState(0);
    const [ScrollViewW, setScrollViewW] = React.useState(0);
    const [ScrollIndex, setScrollIndex] = React.useState(0);
    const [showDialog1, setshowDialog1] = React.useState(false);
    const [showDialog2, setshowDialog2] = React.useState(false);

    // variables
    const snapPoints = React.useMemo(() => ['50%', '75%', '90%'], []);

    // callbacks
    const handleSheetChanges = React.useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const [checked, setChecked] = React.useState(false);

    // _renderItem = ({ item, index }) => {
    //     return (
    //         <View style={styles.slide}>
    //             <Text style={styles.title}>{item.title}</Text>
    //         </View>
    //     );
    // }

    // const renderListItem = ({ item }) => (
    //     <Item bottomSheetRefCoupon={bottomSheetRefCoupon} bottomSheetRef={bottomSheetRef} navigation={navigation} item={item} title={item.title} />
    // );
    async function wait500ms() {
        await delayAsync(500);
    }
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={{ width: '100%', height: '100%', marginBottom: 70 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <View style={{ height: 16 }}></View>
                    <Image style={{ zIndex: 2, resizeMode: 'stretch', width: '84%', flex: 1, height: undefined, aspectRatio: 1016 / 188 }} source={require('./assets/logo.png')} />
                    <View style={{ height: 16 }}></View>

                    <ScrollView
                        onScrollEndDrag={(e) => {
                            var s = parseFloat(e.nativeEvent.contentOffset.x / ScrollViewW)
                            console.log(parseInt(s))

                            setScrollIndex(parseInt(s));
                        }}
                        onLayout={(event) => {
                            var { x, y, width, height } = event.nativeEvent.layout;
                            setScrollViewH(height);
                            setScrollViewW(width);
                        }}
                        style={{ aspectRatio: 1 / 1, width: '100%', height: undefined }}
                        pagingEnabled={true}
                        horizontal={true}
                        contentInset={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}>
                        {DATA.map((inf) => {
                            return (
                                <View style={styles.swiper_view}>
                                    <Image style={{ resizeMode: 'cover', aspectRatio: 1 / 1, width: '100%', height: undefined, borderRadius: 16 }} source={{ uri: inf.img }} />
                                </View>
                            )
                        })}
                    </ScrollView>

                    <CollapsibleItem setshowDialog1={setshowDialog1} data={DATA[ScrollIndex]} />
                    <CollapsibleItem2 setshowDialog2={setshowDialog2} data={DATA[ScrollIndex]} />
                    <Image style={{ zIndex: 1, position: 'absolute', left: 0, top: 40, resizeMode: 'stretch', width: '39%', height: undefined, aspectRatio: 470 / 334 }} source={require('./assets/leaf_left.png')} />
                    <Image style={{ zIndex: 1, position: 'absolute', right: 0, top: ScrollViewH - 10, resizeMode: 'stretch', width: '39%', height: undefined, aspectRatio: 475 / 300 }} source={require('./assets/leaf_right.png')} />
                </View>
            </ScrollView>

            {/* <View>
                <FlatList style={{ backgroundColor: '#FFF3E3', flex: 1,height:'100%',marginBottom:70 }}
                    data={DATA}
                    renderItem={renderListItem}
                    keyExtractor={(item) => item.id}
                />
            </View> */}

            <Dialog
                visible={showDialog1}
                dialogStyle={{ padding: 0, backgroundColor: 'transparent' }}
                contentStyle={{ padding: 0, backgroundColor: 'transparent' }}
                titleStyle={{ backgroundColor: 'red', padding: 0, height: 0 }}
                title={null}
                onTouchOutside={() => {

                }} >
                <ScrollView style={{ padding: 0 }}>
                    <ImageBackground style={{ width: '100%', height: undefined, aspectRatio: 527 / 939 }} resizeMode="stretch" source={require('./assets/bg2.png')}>
                        {/* <Image style={{ position:'absolute',left:0,top:0, resizeMode: 'stretch', width: '100%', height: '100%' }} source={require('./assets/bg2.png')} /> */}
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingLeft: 16, paddingRight: 16 }}>
                            <Image style={{ resizeMode: 'stretch', width: '100%', height: undefined, aspectRatio: 1023 / 630 }} source={require('./assets/card.png')} />
                            <View style={{ height: 40 }}></View>
                            <Text style={{ textAlign: 'left', width: '100%' }}>权益描述</Text>
                            <Text style={{ textAlign: 'left', width: '100%' }}>购买该权益可立即加入校友圈和考研圈，圈子里每天都会分享珍贵的考研资料以及优秀的校友整理好的复习笔记;同时圈子里还邀请了重量级的嘉宾助阵，每天都会为每一个同学进行答疑解惑！</Text>
                            <View style={{ height: 16 }}></View>
                            <TouchableOpacity style={{ width: '85%', aspectRatio: 861 / 138 }} onPress={() => { setshowDialog1(false) }}>
                                <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.text}>USE it</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </ScrollView>
            </Dialog>

            <Dialog
                visible={showDialog2}
                dialogStyle={{ padding: 0, backgroundColor: 'transparent' }}
                contentStyle={{ padding: 0, backgroundColor: 'transparent' }}
                titleStyle={{ backgroundColor: 'red', padding: 0, height: 0 }}
                title={null}
                onTouchOutside={() => {

                }} >
                <ScrollView style={{ padding: 0 }}>
                    <ImageBackground style={{ width: '100%', height: undefined, aspectRatio: 527 / 939 }} resizeMode="stretch" source={require('./assets/bg2.png')}>
                        {/* <Image style={{ position:'absolute',left:0,top:0, resizeMode: 'stretch', width: '100%', height: '100%' }} source={require('./assets/bg2.png')} /> */}
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingLeft: 16, paddingRight: 16 }}>
                            <Image style={{ resizeMode: 'stretch', width: '70%', height: undefined, aspectRatio: 756 / 732 }} source={require('./assets/clock.png')} />
                            <View style={{ height: 40 }}></View>
                            <Text style={{ textAlign: 'center', width: '100%', fontSize: 20 }}>顯示後5分鐘即會失效，是否確認使用？</Text>
                            <View style={{ height: 40 }}></View>
                            <View style={{ width: '90%', height: 50, flexDirection: 'row' }}>
                                <TouchableOpacity style={{ flex: 1, aspectRatio: 516 / 138 }} onPress={() => { setshowDialog2(false) }}>
                                    <ImageBackground source={require('./assets/btn3.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.text}>NO</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={{ width: 16 }}></View>
                                <TouchableOpacity style={{ flex: 1, aspectRatio: 516 / 138 }} onPress={() => { setshowDialog2(false) }}>
                                    <ImageBackground source={require('./assets/btn3.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.text}>YES</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
            </Dialog>
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    image: {
        width: 28,
        height: 28,
        resizeMode: 'stretch'
    },
    contentContainer: {
        zIndex: 999
    },
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF3E3',
    },
    screen: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
    },
    swiper_view: {
        marginTop: 0,
        width: width,
        height: undefined,
        aspectRatio: 1 / 1,
        borderRadius: 10,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 16,
        margin: 0
        //paddingHorizontal : 30
    },
    view2: {
        marginTop: 100,
        backgroundColor: 'red',
        width: width - 80,
        margin: 10,
        height: 200,
        borderRadius: 10,
        //paddingHorizontal : 30
    },
});