import React from 'react';
import * as Animatable from 'react-native-animatable'

import { Dimensions, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SocialButton = ({ IconName, color, IconColor, SocialButtonTitle, backgroundColor, ...rest }) => {


    return (
        <Animatable.View animation="fadeIn" style={styles.iconWrapper}>
            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: backgroundColor }]}>
                <FontAwesome
                    name={IconName}
                    size={25}
                    color={IconColor}
                    style={styles.icon}

                />
                <Text style={[styles.btnTxtWrapper, { color: color }]}>{SocialButtonTitle}</Text>
            </TouchableOpacity >
        </Animatable.View>

    )

}

export default SocialButton;



const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 15,
        // margin: 7,
        width: '100%',
        height: Dimensions.get('window').height / 15,
        width: Dimensions.get('window').width / 1.1,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
        backgroundColor: '#FFF',
        // marginTop: 25
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        // fontWeight: 'bold',
    },
    btnTxtWrapper: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'times',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
    },
})