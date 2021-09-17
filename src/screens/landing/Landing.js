import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Animated, Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, IconButton, Paragraph, Searchbar, Title } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { FlatGrid } from 'react-native-super-grid';
import { Header } from 'react-native-elements';
import { withRouter } from "react-router-native";

var cardData = [{
    name: 'Toyota CHR',
    address: 'Galle, Galle',
    price: '8,500,000',
    updated: '1 week ago'
}, {
    name: 'Toyota Vitz',
    address: 'Galle, Galle',
    price: '8,500,000',
    updated: '1 week ago'
}, {
    name: 'Toyota Premio',
    address: 'Galle, Galle',
    price: '8,500,000',
    updated: '1 week ago'
}, {
    name: 'Discovery Sport',
    address: 'Galle, Galle',
    price: '8,500,000',
    updated: '1 week ago'
}, {
    name: 'Toyota CHR',
    address: 'Galle, Galle',
    price: '8,500,000',
    updated: '1 week ago'
}, {
    name: 'Toyota CHR',
    address: 'Galle, Galle',
    price: '8,500,000',
    updated: '1 week ago'
}, {
    name: 'Toyota CHR',
    address: 'Galle, Galle',
    price: '8,500,000',
    updated: '1 week ago'
}, {
    name: 'Toyota CHR',
    address: 'Galle, Galle',
    price: '8,500,000',
    updated: '1 week ago'
}]

var primaryColor = '#7D86F5'
var lightColor = '#887AFE'


function HomeScreen() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 80 }}>

            <SafeAreaView>
                <View style={{
                    flexDirection: "row",
                    marginBottom: -20,
                    alignItems: 'stretch'
                    , alignItems: 'center', justifyContent: 'center', padding: 10
                }}>
                    <Searchbar
                        style={{ marginRight: 40, margin: 10, marginLeft: 10, marginTop: -10 }}
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                    <IconButton
                        style={{ marginRight: 10, marginLeft: -28, marginTop: -10, }}
                        icon='sort-variant'
                        color={primaryColor}
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />


                </View>
                <FlatGrid
                    scrollEnabled={true}
                    itemDimension={130}
                    data={cardData}
                    renderItem={({ item }) => (<Card //function  using the data in the listing  
                        style={{
                            margin: 0,
                            padding: 10
                        }}
                    >
                        <Card.Content style={{
                            alignItems: 'center',
                            borderRadius: 50,
                            marginTop: -10
                        }}>
                            <Image style={{
                                alignItems: 'center',
                                borderRadius: 10
                            }} source={{ uri: "https://picsum.photos/200", width: 160, height: 160 }} />
                        </Card.Content>
                        <Card.Title style={{
                            marginTop: -10,
                            marginBottom: -10
                        }} title={item.name} subtitle={item.address} />
                        <Text style={{
                            marginBottom: -25,
                            marginLeft: 15,
                            fontSize: 16,
                            fontWeight: 'bold'
                        }} >{'Rs ' + item.price}</Text>
                        <View style={[styles.container, {
                            // Try setting `flexDirection` to `"row"`.
                            flexDirection: "row",
                            marginBottom: -20,
                            alignItems: 'stretch'
                        }]}>
                            <View style={{ flex: 1, marginTop: 10 }} >
                                <Ionicons style={{ marginLeft: -5 }} name='time-outline' size={10} color='grey' />

                            </View>
                            <View style={{ flex: 10, marginTop: -20 }} >
                                <Card.Title style={{
                                    marginBottom: -40,
                                    paddingLeft: -20
                                }} subtitle={item.updated} />
                            </View>

                        </View>

                    </Card>)}
                />
            </SafeAreaView>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}



function MainScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Header
                placement="left"
                backgroundColor="#7D86F5"
                leftComponent={{ icon: 'arrow-back', color: '#fff', size: 30 }}
                centerComponent={{ text: 'Post Ad ', style: { color: '#fff', fontSize: 22 } }}
            />
            <Text>Main Screen</Text>
        </View>
    );
}

function ChatScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Chat Screen</Text>
        </View>
    );
}

function PersonScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Person Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function LandingScreen() {

    const tabOffsetValue = React.useRef(new Animated.Value(0)).current;
    const [color, setColor] = React.useState(primaryColor);

    return (
        <NavigationContainer>
        {/* <View> */}
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        backgroundColor: 'white',
                        position: 'absolute',
                        bottom: 20,
                        marginHorizontal: 20,
                        paddingBottom: 20,
                        height: 60,
                        borderRadius: 10,
                        shadowColor: '#000',
                        shadowOpacity: 0.06,
                        shadowOffset: {
                            width: 10,
                            height: 10
                        }
                    }
                ],
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
            >
                <Tab.Screen name="Lak.lk" component={HomeScreen} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: [{
                        color: 'white'
                    }],
                    headerStyle: [{
                        backgroundColor: primaryColor
                    }],
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: 'absolute',
                            top: '50%'
                        }}>
                            <Ionicons name='home' size={20} color={focused ? primaryColor : 'grey'} />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        setColor(primaryColor)
                        Animated.spring(tabOffsetValue, {
                            toValue: 0,
                            useNativeDriver: true
                        }).start();
                    }
                })} />
                <Tab.Screen name="Business" component={SettingsScreen} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: [{
                        color: 'white'
                    }],
                    headerStyle: [{
                        backgroundColor: primaryColor
                    }],
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: 'absolute',
                            top: '50%'
                        }}>
                            <Ionicons name='business' size={20} color={focused ? primaryColor : 'grey'} />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        setColor(primaryColor)
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth(),
                            useNativeDriver: true
                        }).start();
                    }
                })} />
                {

                }

                <Tab.Screen name="ActionButton" component={MainScreen} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: [{
                        color: 'white'
                    }],
                    headerStyle: [{
                        backgroundColor: primaryColor
                    }],
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            width: 55,
                            height: 55,
                            backgroundColor: primaryColor,
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 30,
                            shadowColor: '#000',
                            shadowOpacity: 0.06,
                            shadowOffset: {
                                width: 10,
                                height: 10
                            }
                        }}>
                            <Ionicons name='add' size={40} color='white' />
                        </View>


                    )
                }} listeners={({ history, route }) => ({
                    tabPress: e => {
                        setColor('transparent')
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 2,
                            useNativeDriver: true
                        }).start();
                        history.push("/postAds")
                    }
                })} />

                <Tab.Screen name="Chat" component={ChatScreen} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: [{
                        color: 'white'
                    }],
                    headerStyle: [{
                        backgroundColor: primaryColor
                    }],
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: 'absolute',
                            top: '50%'
                        }}>
                            <Ionicons name='chatbubbles' size={20} color={focused ? primaryColor : 'grey'} />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        setColor(primaryColor)
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 3,
                            useNativeDriver: true
                        }).start();
                    }
                })} />

                <Tab.Screen name="Person" component={PersonScreen} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: [{
                        color: 'white'
                    }],
                    headerStyle: [{
                        backgroundColor: primaryColor
                    }],
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            position: 'absolute',
                            top: '50%'
                        }}>
                            <Ionicons name='person' size={20} color={focused ? primaryColor : 'grey'} />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        setColor(primaryColor)
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 4,
                            useNativeDriver: true
                        }).start();
                    }
                })} />
            </Tab.Navigator>

            <Animated.View style={{
                width: getWidth() - 20,
                height: 3,
                backgroundColor: color,
                position: 'absolute',
                bottom: 78,
                left: 30,
                borderRadius: 50,
                transform: [
                    { translateX: tabOffsetValue }
                ]
            }} >

            </Animated.View>
        {/* </View> */}

         </NavigationContainer>
    );
}

function getWidth() {
    let width = Dimensions.get('window').width

    width = width - 40

    return width / 5

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default LandingScreen;