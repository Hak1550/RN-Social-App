import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, ListView } from 'react-native';
import Pics from '../Components/Pics';
import PicsData from '../Components/PicData';
import { FlatList } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable'


const Profile = () => {

    const themeColor = "#C61B00";

    return (

        <View style={Styles.Container}>
            <View style={Styles.UpperPart} >
                <Animatable.Image animation='bounceInDown' duration={1000} source={require('../Assets/Untitled.png')} style={{ width: 70, height: 70, borderRadius: 35 }} />
                <Animatable.Text animation='bounceInLeft' style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, textTransform: 'uppercase' }}>Haris Ali Khan</Animatable.Text>
                <Animatable.Text animation='bounceInRight' style={{ color: '#fff9', fontSize: 17, textTransform: 'lowercase' }}>@harisalikhan</Animatable.Text>




            </View>







            {/* LowerPart */}

            <Animatable.View animation='bounceInUp' duration={3000} style={Styles.LowerPart}>

                <View style={{ flexDirection: 'row', marginTop: 10, width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ color: '#666', fontSize: 20, fontWeight: 'bold' }}> 80 </Text>
                        <Text style={{ color: '#666' }}> Followings </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'column', alignItems: 'center', marginLeft: 70, marginBottom: 10
                    }}>
                        <Text style={{ color: '#666', fontSize: 20, fontWeight: 'bold' }
                        } > 100 </Text>
                        <Text style={{ color: '#666' }}> Followers </Text>
                    </TouchableOpacity>
                </View>

                {/* <FlatList
                        data={PicsData}
                        renderItem={({ Picitem }) => <Pics Picitem={Picitem} />}
                        keyExtractor={Picitem => Picitem.id}
                        showsVerticalScrollIndicator={false}
                    /> */}


                <Pics />


            </Animatable.View>






        </View >




        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text style={{ color: '#C61B00' }}>
        //         Profile Tab
        // </Text>
        //     <TouchableOpacity style={{ color: '#666' }}>
        //         <Text style={{ color: '#868E96' }}>Click Here</Text>
        //     </TouchableOpacity>

        // </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#C61B00'
    },
    UpperPart: {
        flex: 2,
        backgroundColor: '#C61B00',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    LowerPart: {
        flex: 5,
        backgroundColor: '#fff',
        borderTopEndRadius: 50,
        borderTopLeftRadius: 50,

        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
})




export default Profile;