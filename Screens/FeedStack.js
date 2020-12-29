import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, Dimensions } from 'react-native';




const FeedStack = ({ navigation }) => {



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ color: '#1976D2' }}>
                FeedStack Tab
        </Text>


            <TouchableOpacity onPress={() => { navigation.navigate('Home') }} >
                <Text style={{ color: '#868E96' }}>Click Here</Text>
            </TouchableOpacity>



        </View >
    )
}
export default FeedStack;