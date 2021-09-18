import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Animated, Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, Divider, IconButton, Paragraph, Searchbar, Title } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { FlatGrid } from 'react-native-super-grid';
import { Header, Button, Icon } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
// import { ScrollView } from 'react-native-gesture-handler';

var images= [
    "https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/c-hr/2NA/1.png?bg=fff&fm=webp&w=930",
    "https://t1-cms-2.images.toyota-europe.com/toyotaone/euen/toyota-c-hr-2020-gallery-17-full_tcm-11-2141451.jpg",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree", // Network image
    // require('./assets/images/girl.jpg'),          // Local image
  ]
var cardData = [{
    name: 'Toyota CHR',
    address: 'Galle, Galle',
    price: '8,500,000',
    updated: '1 week ago',
    publishDate: '29 Aug 8:27 AM',
    seller: 'Kamal',
    description: 'This is a Normal paragraph.This is a Normal paragraph.This is a Normal paragraph.This is a Normal paragraph.This is a Normal paragraph.This is a Normal paragraph.This is a Normal paragraph.This is a Normal paragraph.'
}]

var primaryColor = '#7D86F5'
var lightColor = '#887AFE'

function DetailScreen() {


    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Header
                placement="left"
                backgroundColor="#7D86F5"
                leftComponent={{ icon: 'arrow-back', color: '#fff', size: 30 }}
                centerComponent={{ text: 'Detailes ', style: { color: '#fff', fontSize: 22 } }}
                rightComponent={{ icon: 'share', color: '#fff', size: 30 }}
            />

            <ScrollView>
                {/* <Image style={{
                    alignItems: 'center',
                }} source={{ uri: "https://picsum.photos/200", width: '100%', height: 300 }} /> */}
                <SliderBox images={images} dotColor="#FFEE58" />
                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', padding: 20 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Toyota CHR 2018</Text>
                    <Text style={{ color: 'grey', fontSize: 12 }}>Publish on 29 Aug 8: 27 AM</Text>
                    <Text style={{ color: 'grey', fontSize: 12, paddingBottom: 10 }}>Nugegoda, Colombo</Text>
                    {/* <Text>Main Screen</Text> */}
                    <Divider orientation="horizontal" width={370} style={{ color: 'grey', borderWidth: 1, marginBottom: 10 }} />
                    <Text style={{ fontWeight: 'bold', color: primaryColor, fontSize: 18 }}>Rs.8,500,000</Text>
                    <Text style={{ color: 'grey', fontSize: 12, marginBottom: 10 }}>Publish on 29 Aug 8: 27 AM</Text>
                    <Divider orientation="horizontal" width={370} style={{ color: 'grey', borderWidth: 1, marginBottom: 10 }} />
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Description</Text>
                    <Text style={{ color: 'grey', fontSize: 12 }}>This is a Description.This is a Description.This is a Description.This is a Description.
                        This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                        This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                        This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                        This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                        This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                        This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                        This is a Description.This is a Description.This is a Description.This is a Description.</Text>
                    <Divider orientation="horizontal" width={370} style={{ color: 'grey', borderWidth: 1, marginTop: 10 }} />
                    <View style={{
                        // Try setting `flexDirection` to `"row"`.
                        width: '100%',
                        flex: 1,
                        padding: 20,
                        flexDirection: "row",
                        marginBottom: -20,
                        justifyContent:'center'
                    }}>
                        {/* <View style={{ flex: 1, marginTop: 10 }} >
                            <Ionicons style={{ marginLeft: -5 }} name='time-outline' size={10} color='grey' />

                        </View>
                        <View style={{ flex: 10, marginTop: -20 }} >
                            <Card.Title style={{
                                marginBottom: -40,
                                paddingLeft: -20
                            }} subtitle={item.updated} />
                        </View> */}
                        <Button 
                            icon={
                                <Icon
                                    name="call"
                                    size={15}
                                    color='white'
                                    
                                />
                            }
                            title="   Call "
                        />
                        <View style={{ width: 100 }} >

                        </View>
                        <Button
                            icon={
                                <Icon
                                    name="chat"
                                    size={15}
                                    color='white'
                                />
                            }
                            title="   Chat"

                        />

                    </View>
                </View>
            </ScrollView >
            {/* <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', padding: 20 }}>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Toyota CHR 2018</Text>
                <Text style={{ color: 'grey', fontSize: 12 }}>Publish on 29 Aug 8:27 AM</Text>
                <Text style={{ color: 'grey', fontSize: 12, paddingBottom: 10 }}>Nugegoda, Colombo</Text>
                
                <Divider orientation="horizontal" width={370} style={{ color: 'grey', borderWidth: 1, marginBottom: 10 }} />
                <Text style={{ fontWeight: 'bold', color: primaryColor, fontSize: 18 }}>Rs. 8,500,000</Text>
                <Text style={{ color: 'grey', fontSize: 12, marginBottom: 10 }}>Publish on 29 Aug 8:27 AM</Text>
                <Divider orientation="horizontal" width={370} style={{ color: 'grey', borderWidth: 1, marginBottom: 10 }} />
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Description</Text>
                <Text style={{ color: 'grey', fontSize: 12 }}>This is a Description.This is a Description.This is a Description.This is a Description.
                    This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                    This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                    This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                    This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                    This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                    This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.This is a Description.
                    This is a Description.This is a Description.This is a Description.This is a Description.</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Description</Text>

            </View> */}


        </View >
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    hr: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        height: 1,
        backgroundColor: "#8C8B8B",
        marginLeft: 28,
        borderWidth: 1
    }
});

export default DetailScreen;