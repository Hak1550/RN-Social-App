import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Support = () => {
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#666' }}>
                Support Tab
        </Text>
            <TouchableOpacity >
                <Text style={{ color: '#868E96' }}>Click Here</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Support;