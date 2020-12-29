
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';


const Settings = ({ navigation }) => {
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#6C578A' }}>
                Settings Tab
        </Text>
            <TouchableOpacity style={{ color: '#666' }}>
                <Text style={{ color: '#868E96' }}>Click Here</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#6C578A', borderRadius: 3, marginTop: 15, width: Dimensions.get('window').width / 1.1, position: 'absolute', bottom: 15 }} onPress={() => navigation.navigate('Login')}>
                <Text style={{ fontSize: 18, padding: 10, textAlign: 'center', color: '#fff' }}>
                    Logut
    </Text>
            </TouchableOpacity>

        </View>
    )
}
export default Settings;