import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Bookmark = () => {
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#666' }}>
                Book Mark Tab
        </Text>
            <TouchableOpacity >
                <Text style={{ color: '#868E96' }}>Click Here</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Bookmark;