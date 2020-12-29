import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Messages = () => {
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#666' }}>
                Messages Tab
        </Text>
            <TouchableOpacity >
                <Text style={{ color: '#868E96' }}>Click Here</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Messages;