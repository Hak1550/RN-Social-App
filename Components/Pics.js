import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Image, ListView } from 'react-native';


const Pics = ({ Picitem }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }} >
            <View style={{
                width: '100%', flexDirection: 'row', flexWrap: "wrap", alignItems: 'flex-start', justifyContent: 'center', margin: 'auto'
            }}>

                <Image source={require('../Assets/Post/post(1).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(2).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(3).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(4).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                < Image source={require('../Assets/Post/post(10).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(5).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(8).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(9).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(10).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(11).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(12).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(1).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(2).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(3).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(4).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(5).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(6).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(7).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(8).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(9).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(10).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(11).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(12).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />
                <Image source={require('../Assets/Post/post(1).jpg')} style={{ width: '30%', height: 100, margin: 5 }} />



            </View>
        </ScrollView >
    )
}
export default Pics;
