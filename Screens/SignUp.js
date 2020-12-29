import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, TouchableOpacity, View, Text } from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButton'
// import { AuthContext } from '../Authenication/AuthProvider';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';


const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // const { Register } = useContext(AuthContext)




    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <LottieView source={require('../Assets/4069-social.json')} autoPlay loop style={{ flex: 1, backgroundColor: '#fff' }} />
            </View>

        )
    }




    return (
        <>
            <View style={{ backgroundColor: '#F7F7F7', flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <View >
                    <Text style={{ backgroundColor: '#F7F7F7', fontSize: 20, fontWeight: 'bold', fontFamily: 'arial-bold', marginBottom: 30 }}>CREATE AN ACCOUNT</Text>
                </View>
                <FormInput
                    IconName="user"
                    PlaceholderText="Email"
                    LabelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    keyboardType="email-address"
                    autoCapitalization="none"
                    autoCorrect={false}

                />
                <FormInput
                    IconName="lock"
                    PlaceholderText="Password"
                    LabelValue={password}
                    onChangeText={(userPassword) => setEmail(userPassword)}
                    // keyboardType="password"
                    autoCapitalization="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <FormInput
                    IconName="lock"
                    PlaceholderText="Confirm Password"
                    LabelValue={'password'}
                    onChangeText={(userPassword) => setEmail(userPassword)}
                    // keyboardType="password"
                    autoCapitalization="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />


                <FormButton
                    ButtonTitle="Sign Up"
                // onPress={() => { Register(email, password) }}
                />



                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ color: '#ccc' }}>By registering, you confirm that you accept our</Text>
                    <TouchableOpacity onPress={() => { alert('Terms Accepted!') }}>
                        <Text style={{ color: '#FF6666', }}  > Terms of services</Text>
                    </TouchableOpacity >
                    <Text style={{ color: '#ccc' }}> and</Text>
                    <TouchableOpacity onPress={() => { alert('Policy Accepted!') }}>
                        <Text style={{ color: '#FF6666', }}> Privacy Policy</Text>
                    </TouchableOpacity>
                </View>


                <SocialButton
                    IconName='facebook'
                    SocialButtonTitle='Sign-In with Facebook'
                    IconColor='#1976D2'
                    color='#1976D2'
                    backgroundColor="#d3dbe2"
                />

                <SocialButton
                    IconName='google'
                    SocialButtonTitle='Sign-In with Google'
                    IconColor='#FF6666'
                    color='#FF6666'
                    backgroundColor="#f2d5d5"
                />

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                    <Text style={{ color: '#1976D2' }}>Having an Account?</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                        <Text style={{ color: '#1976D2', fontWeight: 'bold' }}  > Sign In</Text>
                    </TouchableOpacity >
                </View>

            </View >
        </>



    )
}

export default SignUp;  