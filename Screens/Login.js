import React, { useState, useEffect } from 'react';
import { Image, View, Text, ActivityIndicator } from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButton'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Facebook_Login from '../Components/FacebookLogin'
import { LoginManager, LoginButton, AccessToken } from "react-native-fbsdk";
import LottieView from 'lottie-react-native';
// import onGoogleButtonPress from '../Components/GoogleSignIn'
// import { GoogleSignin } from '@react-native-community/google-signin';
// import MainTabScreen from '../Navigation/MainRoute'

const Login = ({ navigation }) => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        let user = {
            email,
            password
        }
        console.log(user),
            navigation.navigate('Home')
    }


    const googleSignIn = () => {

        // GoogleSignin.configure({
        //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        //     webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
        //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        //     hostedDomain: '', // specifies a hosted domain restriction
        //     loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
        //     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        //     accountName: '', // [Android] specifies an account name on the device that should be used
        //     iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        // });
        console.log("Google Button Clicked")
    }





    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500)
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <ActivityIndicator size='large' color='#0000ff' /> */}
                <LottieView source={require('../Assets/4069-social.json')} autoPlay loop style={{ flex: 1, backgroundColor: '#fff' }} />

            </View>

        )
    }


    return (
        <View style={{ backgroundColor: '#F7F7F7', flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>


            <View style={{ backgroundColor: '#F7F7F7', alignItems: 'center', marginBottom: 100 }}>
                <Image source={require('../Assets/Logo.png')} style={{ backgroundColor: '#F7F7F7', height: 80, resizeMode: 'contain', marginBottom: 0 }} />
                <Text style={{ backgroundColor: '#F7F7F7', fontSize: 25, fontFamily: 'times', color: '#ffc530' }}><Text style={{ fontSize: 35, color: '#000' }}>
                    s</Text>OCIAL <Text style={{ fontSize: 35, color: '#000' }}>
                        a</Text>PP</Text>
            </View>


            <FormInput
                IconName="user"
                PlaceholderText="E-mail"
                Value={'email'}
                onChangeText={(Text) => setEmail(Text)}
                keyboardType="email-address"
                autoCapitalization="none"
                autoCorrect={false}

            />



            <FormInput
                IconName="lock"
                PlaceholderText="Password"
                Value={'password'}
                onChangeText={(Text) => setPassword(Text)}
                // keyboardType="password"
                autoCapitalization="none"
                autoCorrect={false}
                secureTextEntry={true}
            />



            <FormButton
                
                ButtonTitle="Sign In"
                onPress={() => { navigation.navigate('Main') }}

            />




            <TouchableOpacity>
                <Text style={{ color: '#1976D2', fontWeight: 'bold' }} onPress={() => { alert('Hint: Its is a cricket Match') }}>Forget Password ?</Text>
            </TouchableOpacity>



            {
                Platform.OS === 'android' ? (

                    <View>
                        <SocialButton

                            IconName='facebook'
                            SocialButtonTitle='Sign-In with Facebook'
                            IconColor='#1976D2'
                            color='#1976D2'
                            backgroundColor="#d3dbe2"
                        // onPress={Facebook_Login()}

                        // onPress={() => Facebook_Login().then(() => console.log('Signed in with Facebook!'))}
                        />



                        <SocialButton
                            IconName='google'
                            SocialButtonTitle='Sign-In with Google'
                            IconColor='#FF6666'
                            color='#FF6666'
                            backgroundColor="#f2d5d5"


                        // onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}

                        // onPress={googleSignIn()}
                        />

                    </View>
                ) : null
            }








            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                <Text style={{ color: '#1976D2' }}>Don't have an Account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
                    <Text style={{ color: '#1976D2', fontWeight: 'bold' }}  > Sign Up</Text>
                </TouchableOpacity >
            </View>




        </View >

    );

};

export default Login;