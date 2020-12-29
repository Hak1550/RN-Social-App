import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import OnBoarding from '../Screens/OnBoarding';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Settings from '../Screens/Setting';
import Messages from '../Screens/Messages';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Stack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();










const MainTabScreen = ({ Navigation }) => (
    <Tab.Navigator
        initialRouteName="Home"
        // headerTitle="title"
        activeColor="#f7f7f7"
        style={{ backgroundColor: 'pink' }}
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarBadge: 15,
                tabBarLabel: 'Home',
                tabColor: '#fff',
                tabBarLabel: 'Home',
                headerTitle: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarColor: '#C61B00',
                tabColor: '#f7f7f7',
                tabBackgroundColor: '#000',
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <Icon name="user" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Messages"
            component={Messages}
            options={{
                tabBarBadge: 3,
                headerTitle: 'Settings',
                title: 'Settings',
                tabBarTitle: 'Settings',
                tabBarColor: '#666',
                tabColor: '#f7f7f7',
                tabBarLabel: 'Messages',
                tabBarIcon: ({ color }) => (
                    <Icon name="envelope" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
                tabBarColor: '#6C578A',
                tabBarLabel: 'Settings',
                tabColor: '#f7f7f7',
                tabBarIcon: ({ color }) => (
                    <Icon name="sliders" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)



export default MainTabScreen;
