import React from 'react';
import { TouchableOpacity, Text, Image, Button } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper'
import { AsyncStorage } from 'AsyncStorage';


const Done = ({ ...props }) => {
    return (

        <TouchableOpacity {...props}>
            <Text style={{ marginRight: 20, color: '#fff', fontSize: 16 }}>
                Done
    </Text>

        </TouchableOpacity>
    )

}

const OnBoarding = ({ navigation }) => {



    return (
        <Onboarding
            DoneButtonComponent={Done}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.replace("Login")}
            pages={[
                {
                    backgroundColor: '#00AEEF',
                    image: <Image source={require('../Assets/Onboarding-image-3.jpg')}
                        style={{ resizeMode: 'contain', width: 200 }} />,
                    title: '',
                    // color: 'black',
                    subtitle: '',
                },
                {
                    backgroundColor: '#50B0D6',
                    image: <Image source={require('../Assets/Onboarding-image-2.jpg')}
                        style={{ resizeMode: 'contain', width: 400 }} />,
                    title: 'Onboarding 2',
                    // color: 'black',
                    subtitle: 'Done withss React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#7FB68C',
                    image: <Image source={require('../Assets/Onboarding-image-1.jpg')}
                        style={{ resizeMode: 'contain', width: 200 }} />,
                    title: 'Onboarding 3',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    );

};
export default OnBoarding;