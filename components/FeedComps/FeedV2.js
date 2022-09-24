import React, { useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, Image, StyleSheet, Button, ScrollView, Dimensions, ImageBackground, TouchableOpacity, FlatList, Alert, RefreshControl } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Collapsible from 'react-native-collapsible';
import { Dialog } from 'react-native-simple-dialogs';
import { GetReward, Reward_Data, RewardRedemption } from '../lib'
const { width } = Dimensions.get('window');
const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

GetReward()
const Reward_DATA = Reward_Data
let cgid = ''

//Alert.alert("Reward", JSON.stringify(Reward_DATA))

function CollapsibleItem({ navigation, collapsed, data, setshowDialog1 }) {

    const [coll, setCollapsed] = useState(collapsed);
    const [collHeaderH, setCollHeaderH] = useState(null);

    const clickColl = ({ item }) => {
        // console.log(window.getComputedStyle(ReactDOM.findDOMNode(this.refs.refCollHeaderH)).getPropertyValue("height"))
        console.log(`cupon : ${collHeaderH}`)
        setCollapsed(!coll)
    };

    const clickBtn1 = ({ item }) => {
        setshowDialog1(true)

    };
    temp = 0;
    data.rights.map((d, i) => {
        temp = i
    })
    if (temp === 0) {
        temp += 0.8
    }
    if (temp === 1) {
        temp += 0.8
    }
    temp = (1071 / ((temp + 1) * (300 + (4 - temp) * 12)))
    return (
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: '96%', marginBottom: 0 }}>
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
            }} style={{ zIndex: 2, position: 'absolute', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, left: '0%', flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity onPress={clickColl} style={{ marginRight: 16 }}>
                    <Image style={{ width: 40, height: 40, resizeMode: 'stretch' }} source={require('./assets/icon_arrow_down.png')} />
                </TouchableOpacity>
            </View>
            {/* absolute文字標題背景 */}
            {!coll && <Image style={{ zIndex: 1, position: 'absolute', resizeMode: 'stretch', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, left: '0%', }} source={require('./assets/hand-drawn-ui.png')} />}
            {coll && <Image style={{ zIndex: 1, position: 'absolute', resizeMode: 'stretch', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, left: '0%', }} source={require('./assets/nonbutton.png')} />}
            {/* 下半摺疊選單 */}
            <Collapsible collapsed={!coll} style={{ width: '100%', height: undefined, aspectRatio: temp, zIndex: 8, backgroundColor: '#FFF3E3' }}>
                <Image style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', resizeMode: 'stretch', zIndex: 0 }} source={require('./assets/coll_bg.png')} />
                <View style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: collHeaderH }}>

                    {data.rights.map((inf) => {
                        return (
                            <>
                                <TouchableOpacity onPress={clickBtn1} style={{ width: '85%', aspectRatio: 861 / 138 }}>
                                    <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.text}>{inf.rights.name}</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={{ height: 20 }}></View>
                            </>
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

    const [coll, setCollapsed] = useState(collapsed);
    const [collHeaderH, setCollHeaderH] = useState(null);
    const clickbtn1 = (b) => {
        console.log(b)
        setshowDialog2(true)
    }
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

    const clickBtn1 = (innerData) => {
        setshowDialog2(true)
        cgid = innerData.id
    };
    temp = 0;
    data.coupons.map((d, i) => {
        temp = i
    })
    if (temp === 0) {
        temp += 0.8
    }
    if (temp === 1) {
        temp += 0.8
    }
    temp = (1071 / ((temp + 1) * (300 + (4 - temp) * 12)))
    return (
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: '96%' }}>
            {/* 水豚圖 */}
            <Image style={{ zIndex: 3, resizeMode: 'stretch', width: 142, height: undefined, aspectRatio: 1 / 1, marginLeft: 8 }} source={require('./assets/coll2.png')} />
            {/* absolute文字標題 */}
            <View style={{ zIndex: 2, position: 'absolute', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, left: '0%', flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
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
            {!coll && <Image style={{ zIndex: 1, position: 'absolute', resizeMode: 'stretch', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, left: '0%', }} source={require('./assets/hand-drawn-ui.png')} />}
            {coll && <Image style={{ zIndex: 1, position: 'absolute', resizeMode: 'stretch', width: '100%', height: undefined, aspectRatio: 1071 / 270, top: 52, left: '0%', }} source={require('./assets/nonbutton.png')} />}

            {/* 下半摺疊選單 */}

            <Collapsible collapsed={!coll} style={{ width: '100%', height: undefined, aspectRatio: temp, zIndex: 8, backgroundColor: '#FFF3E3', marginTop: -collHeaderH }}>
                <Image style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', resizeMode: 'stretch', zIndex: 0 }} source={require('./assets/coll_bg.png')} />
                <View style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: collHeaderH }}>
                    {
                        data.coupons.map((inf) => {
                            return (
                                <>
                                    <TouchableOpacity onPress={() => clickBtn1(inf)} style={{ width: '85%', aspectRatio: 861 / 138 }}>
                                        <ImageBackground source={require('./assets/btn1.png')} resizeMode="stretch" style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={styles.text}>{inf.coupon.name + " - 剩餘 :  " + inf.quantity + "次"}</Text>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <View style={{ height: 20 }}></View>
                                </>
                            )
                        })
                    }
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
    const [ScrollViewH, setScrollViewH] = useState(0);
    const [ScrollViewW, setScrollViewW] = useState(0);
    const [ScrollIndex, setScrollIndex] = useState(0);
    const [showDialog1, setshowDialog1] = useState(false);
    const [showDialog2, setshowDialog2] = useState(false);

    //Alert.alert("Reward", JSON.stringify(Reward_DATA))

    // variables
    const snapPoints = React.useMemo(() => ['50%', '75%', '90%'], []);

    // callbacks
    const handleSheetChanges = React.useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const [checked, setChecked] = useState();

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
    const clickBtnCG = () => {
        RewardRedemption(cgid)
        GetReward()
        wait(200).then(() => {
            setshowDialog2(false)
        })

    };
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        GetReward()
        wait(1500).then(() => setRefreshing(false));
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                style={{ width: '100%', height: '100%', marginBottom: 70 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <View style={{ height: 16 }}></View>
                    <Image style={{ zIndex: 2, resizeMode: 'stretch', width: '84%', flex: 1, height: undefined, aspectRatio: 1016 / 188 }} source={require('./assets/logo.png')} />
                    <View style={{ height: 16 }}></View>

                    <ScrollView
                        onScroll={(e) => {
                            var s = parseFloat(e.nativeEvent.contentOffset.x / ScrollViewW)
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
                        {Reward_Data.map((inf) => {
                            return (

                                <View style={styles.swiper_view}>
                                    <Image style={{ resizeMode: 'cover', aspectRatio: 1 / 1, width: '100%', height: undefined, borderRadius: 16 }} source={{ uri: inf.skin.img ? inf.skin.img.replace('https', 'http') : 'http://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg' }} />
                                </View>
                            )
                        })}
                    </ScrollView>

                    {Reward_Data && <CollapsibleItem setshowDialog1={setshowDialog1} data={Reward_Data ? Reward_Data[ScrollIndex] : null} />}
                    <View style={{ height: 30 }}></View>
                    {Reward_Data && <CollapsibleItem2 setshowDialog2={setshowDialog2} data={Reward_Data ? Reward_Data[ScrollIndex] : null} />}
                    <Image style={{ zIndex: 1, position: 'absolute', left: 0, top: 40, resizeMode: 'stretch', width: '39%', height: undefined, aspectRatio: 470 / 334 }} source={require('./assets/leaf_left.png')} />
                    <Image style={{ zIndex: 1, position: 'absolute', right: 0, top: ScrollViewH - 10, resizeMode: 'stretch', width: '39%', height: undefined, aspectRatio: 475 / 300 }} source={require('./assets/leaf_right.png')} />
                    <View style={{ height: 50 }}></View>

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
                                    <Text style={styles.text}>關閉</Text>
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
                                <TouchableOpacity style={{ flex: 1, aspectRatio: 516 / 138 }} onPress={() => { clickBtnCG() }}>
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