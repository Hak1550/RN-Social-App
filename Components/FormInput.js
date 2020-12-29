// import * as React from 'react';
// import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// const FormInputs = ({ IconName, PlaceholderText, LabelValue, ...rest }) => {

//     return (

//         <View style={styles.Conatiner}>
//             <View style={styles.InputLogoArea}>
//                 <AntDesign
//                     name={IconName}
//                     size={25}
//                     color='#666'

//                 />
//             </View>
//             <TextInput
//                 value={LabelValue}
//                 placeholder={PlaceholderText}
//                 placeholderTextColor='#666'
//                 {...rest}
//                 style={styles.TextInputStyle}
//             />
//         </View >
//     );

// };

// export default FormInputs;


// const styles = StyleSheet.create({

//     Container: {
//         marginTop: 5,
//         backgroundColor: '#ccc',
//         marginBottom: 10,
//         // width: '100%',
//         // borderColor: '#fff',
//         borderRadius: 3,
//         borderWidth: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         height: Dimensions.get('window').height / 15,
//     },
//     InputLogoArea: {
//         height: '100%',
//         padding: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRightColor: '#ccc',
//         borderRightWidth: 1,
//         width: 50,
//         backgroundColor: '#fff',

//         height: Dimensions.get('window').height / 18,
//     },
//     TextInputStyle: {
//         padding: 10,
//         marginTop: 5,
//         marginBottom: 10,
//         width: Dimensions.get('window').width / 1.3,
//         backgroundColor: '#fff',
//         fontSize: 16,
//         borderRadius: 8,
//         borderWidth: 1,
//         borderColor: '#ccc'
//     },
// })



import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
// import {windowHeight, windowWidth} from '../utils/Dimentions';

import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({ labelValue, PlaceholderText, IconName, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <AntDesign name={IconName} size={25} color="#666" />
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={PlaceholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
});


