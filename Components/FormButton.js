import React from 'react';
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity, Dimensions, View, Text, StyleSheet } from 'react-native'
// import  color  from 'react-native-reanimated';

const FormButton = ({ ButtonTitle, ...rest }) => {

    return (
        <Animatable.View animation="pulse">
            <TouchableOpacity style={styles.FormButton} {...rest}>
                <Text style={styles.FormButtonTitle}>{ButtonTitle}</Text>
            </TouchableOpacity>

        </Animatable.View>

    )

}

export default FormButton;
const styles = StyleSheet.create({

    FormButton: {
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 15,
        backgroundColor: '#1976D2',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
        // flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',

    },
    FormButtonTitle: {
        fontSize: 18,
        fontFamily: 'arial',
        padding: 10,
        color: 'white',
        textAlign: 'center'
    },
})