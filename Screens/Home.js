import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Login from '../Screens/Login'
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/Ionicons';
import {
    Container,
    CardsContainer,
    Header,
} from '../Styles/Home'
import { FlatList } from 'react-native-gesture-handler';
import Card from '../Components/Card'
import CardData from '../Components/CardData'
import LottieView from 'lottie-react-native';





const Home = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500)
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <ActivityIndicator size='large' color='#0000ff' /> */}
                <LottieView source={require('../Assets/9844-loading-40-paperplane.json')} autoPlay loop style={{ flex: 1, backgroundColor: '#fff' }} />

            </View>

        )
    }





    return (

        // <Header>

        //     <View style={{ alignContent: 'space-between', marginLeft: 15, flexDirection: 'row' }}>
        //         <Icon name='home' size={20} color='#fff' />
        //         <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff', marginLeft: 10 }}>Home</Text>
        //     </View>
        //     <View style={{ alignItems: 'space-between', marginRight: 25, padding: 7, borderRadius: 25, backgroundColor: '#fff', color: '' }}>
        //         <Icon name='plus' size={18} color='#1976D2' onPress={() => { navigation.navigate('FeedStack') }} />
        //     </View>
        // </Header>


        <FlatList
            data={CardData}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />





        // {/* 

        /* <View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>

                <View style={{ alignContent: 'space-between', marginLeft: 15, flexDirection: 'row' }}>
                    <Icon name='home' size={20} color='#1976D2' onPress={() => { navigation.navigate('FeedStack') }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#1976D2', marginLeft: 10 }}>Home</Text>
                </View>
                <View style={{ alignItems: 'space-between', marginRight: 25, padding: 6, borderRadius: 10, backgroundColor: '#1976D2', borderColor: '#fff' }}>
                    <Icon name='plus' size={18} color='#fff' onPress={() => { navigation.navigate('FeedStack') }} />
                </View>
            </View>

            <View style={{ flex: 12, justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                <Text style={{ color: '#1976D2' }}>
                    Home Tab
    </Text>


                <TouchableOpacity >
                    <Text style={{ color: '#868E96' }}>Click Here</Text>
                </TouchableOpacity>

            </View>
        </View>
*/
        // }











        // {/* Camera Setting */ }
        // {/* <View style={{ marginTop: 15 }}>
        //             <Button title="Open Camera" style={{ borderRadius: 5 }}
        //             onPress={() => { navigation.navigate('Camera') }} />
        //             </View>
        //             <View style={{ marginTop: 15 }}>

        //             <Button title="Select Image" style={{ borderRadius: 5 }}
        //             onPress={() => { launchCamera() }} />
        //             </View>
        //             <View style={{ marginTop: 15 }}>

        //             <Button title="Gallery" style={{ borderRadius: 5 }}
        //             onPress={() => { launchImageLibrary() }} />
        //         </View> */}



    )
}
export default Home;