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
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { ScrollView } from 'react-native-gesture-handler';

var images = [
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

function AdsImages() {
    const [imageGallery, setImageUrlGallery] = React.useState([]);

    const [started, setStarted] = React.useState(false)
    const [imageGallery2, setImageUrlGallery2] = React.useState(['https://www.pngkit.com/png/full/129-1298005_png-file-upload-image-icon-png.png', 'https://www.pngkit.com/png/full/129-1298005_png-file-upload-image-icon-png.png',
    'https://www.pngkit.com/png/full/129-1298005_png-file-upload-image-icon-png.png', 'https://www.pngkit.com/png/full/129-1298005_png-file-upload-image-icon-png.png',
    'https://www.pngkit.com/png/full/129-1298005_png-file-upload-image-icon-png.png']);
    const openGallery = () => {
        setStarted(true)
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
            },
            includeBase64: true,
        };

        launchImageLibrary(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');

            } else if (response.errorCode) {
                console.log('Image picker Error');

            } else if (response.errorMessage) {
                console.log('Image picker Error Message');


            } else {
                const source = { url: 'data:image/jpeg:base64,' + response.assets.base64 }
                console.log('Image picker assets = ' + response.assets[0].uri);
                var tempArr = imageGallery;
                tempArr.push(response.assets[0].uri)
                console.log('Image picker array = ' + tempArr.toString());

                setImageUrlGallery(() => {
                    return [...tempArr]
                })
                // setImageUrlGallery(response.assets[0].uri)
            }
        })
    }

    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Header
                placement="left"
                backgroundColor="#7D86F5"
                leftComponent={{ icon: 'arrow-back', color: '#fff', size: 30 }}
                centerComponent={{ text: 'Post An Ad ', style: { color: '#fff', fontSize: 22 } }}
                rightComponent={{ icon: 'share', color: '#fff', size: 30 }}
            />

            {/* <ScrollView> */}

            {/* <SliderBox images={images} dotColor="#FFEE58" /> */}
            <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', padding: 20, width: '100%' }}>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>Add Photos [up to 5]</Text>
                <Text style={{ color: 'grey', fontSize: 12, marginBottom: 10 }}>Upload Pictures up to 5</Text>

                {/* <Image
                        source={{ uri: imageGallery, width: 160, height: 160 }}
                        style={{
                            alignItems: 'center',
                            height: 100,
                            width: 300,
                            borderColor: 'red',
                            borderWidth: 5
                        }} /> */}

                {/* <SafeAreaView> */}
                <View style={{
                    flexDirection: "row",
                    marginBottom: -20,
                    alignItems: 'stretch'
                    , alignItems: 'center', justifyContent: 'center', padding: 10,
                }}>

                </View>
                {started ? <FlatGrid
                    style={{ width: '100%' }}
                    itemDimension={100}
                    extraData={imageGallery}
                    data={imageGallery}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item, width: 100 }}
                            style={{
                                alignItems: 'center',
                                height: 100,
                                width: 100,
                                borderRadius: 5,
                                shadowColor: '#000',
                                shadowOpacity: 0.06,
                                shadowOffset: {
                                    width: 10,
                                    height: 10
                                },
                                // borderColor: 'red',
                                borderWidth: 5,
                                padding: 10
                            }} />
                    )}
                /> : <FlatGrid
                style={{ width: '100%' }}
                itemDimension={100}
                extraData={imageGallery2}
                data={imageGallery2}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item, width: 100 }}
                        style={{
                            alignItems: 'center',
                            height: 100,
                            width: 100,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOpacity: 0.06,
                            shadowOffset: {
                                width: 10,
                                height: 10
                            },
                            // borderColor: 'red',
                            borderWidth: 5,
                            padding: 10
                        }} />
                )}
            />}
                <Text style={{ color: 'grey', fontSize: 14, marginBottom: 10 }}>Note: The first image will be the cover photo of your ad</Text>

                
                {/* </SafeAreaView> */}
                <ScrollView>
                    <Button style={{ marginTop: 10, width: '100%' }}
                        onPress={() => {
                            if (imageGallery.length>=5) {
                                alert("Only Add 5 Images")
                                return;
                            }
                            openGallery();
                        }}
                        icon={
                            <Icon
                                name="add"
                                size={15}
                                color='white'

                            />
                        }
                        title="  Add Images "
                    />
                    {/* <View style={{ flex: 1, marginTop: 10 }} >
                            <Ionicons style={{ marginLeft: -5 }} name='time-outline' size={10} color='grey' />

                        </View>
                        <View style={{ flex: 10, marginTop: -20 }} >
                            <Card.Title style={{
                                marginBottom: -40,
                                paddingLeft: -20
                            }} subtitle={item.updated} />
                        </View> */}

                    <View style={{ height: 100 }} />
                    <Button
                        icon={
                            <Icon
                                name="send"
                                size={15}
                                color='white'

                            />
                        }
                        title="   Post Ad "
                    />
                </ScrollView>




            </View>
            {/* </ScrollView > */}


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

export default AdsImages;