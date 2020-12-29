import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import OnBoarding from '../Screens/OnBoarding';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import FeedStack from '../Screens/FeedStack';
import Camera from '../Components/Camera';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainTabScreen from './MainRoute'
import DrawerContents from '../Navigation/DrawerContent'
import Bookmark from '../Components/BookMark'
import Support from '../Components/Support'





const Stack = createStackNavigator();
const DrawerOptionsStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();






const DrawerOptionsTab = ({ navigation }) => (
    <DrawerOptionsStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#1976D2'
            },
            headerTintColor: '#fff',
            headerTintStyle: {
                fontWeight: 'bold',
            }
        }}>

        <DrawerOptionsStack.Screen
            name="BookMark"
            component={Bookmark}
            options={{
                header: () => null
            }}
        />
        <DrawerOptionsStack.Screen
            name="Support"
            component={Support}
            options={{
                header: () => null
            }}
        />

    </DrawerOptionsStack.Navigator >
);




const LoginScreenStack = ({ navigation }) => (

    <LoginStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#1976D2'
            },
            headerTintColor: '#fff',
            headerTintStyle: {
                fontWeight: 'bold',
            }
        }}>

        <LoginStack.Screen
            name="Onboarding"
            component={OnBoarding}
            options={{
                header: () => null
            }}
        />
        <LoginStack.Screen
            name="SignUp"
            component={SignUp}
            options={{ header: () => null }}
        />
        <LoginStack.Screen
            name="FeedStack"
            component={FeedStack}
            options={{ header: () => null }}
        />
        {/* <LoginStack.Screen
            name='Home'
            component={Home}
            options={{
                headerLeft: () => (
                    < Icon.Button name="bars" size={25} color="#000" backgroundColor='#fff' onPress={() => { navigation.openDrawer() }} > </Icon.Button>
                ),
            }
        }
    /> */}
        < LoginStack.Screen
            name="Bookmark"
            component={Bookmark}
            options={{ header: () => null }}
        />
        < LoginStack.Screen
            name="Support"
            component={Support}
            options={{ header: () => null }}
        />
        <LoginStack.Screen
            name="Login"
            component={Login}
            options={{ header: () => null }}
        />
        < LoginStack.Screen
            name="Camera"
            component={Camera}
            options={{ header: () => null }}
        />
    </LoginStack.Navigator>

);

// const HomeScreenStack = ({ navigation }) => (


//     <HomeStack.Navigator>
//         {/* <HomeStack.Screen
//             name="SignUp"
//             component={SignUp}
//             options={{ header: () => null }}
//         /> */}
//     </HomeStack.Navigator >

// );

const Route = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => < DrawerContents {...props} />} initialRouteName="Login">
                <Drawer.Screen name="Login" component={LoginScreenStack} />
                <Drawer.Screen name="Main" component={MainTabScreen} />
            </Drawer.Navigator>
        </NavigationContainer >
    )
}




export default Route
