import React from 'react';
import { View, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer, DarkTheme, Text, TouchableRipple, Switch } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

const DrawerContents = ({ navigation }, props) => {
    return (
        <View style={{ flex: 1 }}>


            <DrawerContentScrollView {...props}>

                <View style={{ flex: 1, backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -250, borderBottomColor: '#666', borderBottomWidth: 1, backgroundColor: '#F7F7F7', padding: 15 }}>
                    <Image source={require('../Assets/Logo.png')} style={{ height: 40, resizeMode: 'contain' }} />
                    <View style={{ marginLeft: -220 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#666' }}>Social App</Text>
                    </View>
                </View>




                <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 30 }}>
                    <Avatar.Image size={50} source={require('../Assets/Untitled.png')} />
                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                        <Title style={{ marginLeft: 10, marginBottom: 0 }}> Haris Ali Khan</Title>
                        <Caption style={{ marginLeft: 15, marginTop: -5 }}>@hakalikhan</Caption>
                    </View>
                </View>



                <View style={{ flexDirection: 'row', marginLeft: 30, color: '#666', marginTop: 25 }}>
                    <View>
                        <Paragraph style={{ fontSize: 18, textAlign: 'center', color: '#000', fontWeight: 'bold', marginBottom: -5 }}>80</Paragraph>
                        <Caption>Followings</Caption>
                    </View>
                    <View style={{ marginLeft: 30 }}>
                        <Paragraph style={{ fontSize: 18, textAlign: 'center', color: '#000', marginBottom: -5, fontWeight: 'bold' }}>100</Paragraph>
                        <Caption>Followers</Caption>
                    </View>
                </View>







                <View style={{ marginTop: 10 }}>

                    <Drawer.Section style={{}}>

                        <DrawerItem
                            style={{ backgroundColor: '#fff', color: '#666' }}
                            onPress={() => { navigation.navigate('Home') }}
                            label="Home"
                            icon={(color, size) =>
                                (
                                    <Icon name="home" size={25} color="#666" />
                                )}
                        />
                    </Drawer.Section>


                    <Drawer.Section style={{}}>

                        <DrawerItem
                            style={{ backgroundColor: '#fff', color: '#666' }}
                            onPress={() => { navigation.navigate('Profile') }}
                            label="Profile"
                            icon={(color, size) =>
                                (
                                    <Icon name="user" size={25} color="#666" />
                                )}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={{}}>

                        <DrawerItem
                            style={{ backgroundColor: '#fff', color: '#666' }}
                            onPress={() => { navigation.navigate('Messages') }}
                            label="Messages"
                            icon={(color, size) =>
                                (
                                    <Icon name="envelope" size={23} color="#666" />
                                )}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={{}}>

                        <DrawerItem
                            style={{ backgroundColor: '#fff', color: '#666' }}
                            onPress={() => { navigation.navigate('Settings') }}
                            label="Settings"
                            icon={(color, size) =>
                                (
                                    <Icon name="cog" size={25} color="#666" />
                                )}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={{}}>

                        <DrawerItem
                            style={{ backgroundColor: '#fff', color: '#666' }}
                            // Icon="sign-out-alt"
                            onPress={() => { navigation.navigate('Bookmark') }}
                            label="Book Mark"
                            icon={(color, size) =>
                                (
                                    <Icon name="book" size={25} color="#666" />
                                )}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={{}}>

                        <DrawerItem
                            style={{ backgroundColor: '#fff', color: '#666' }}
                            // Icon="sign-out-alt"
                            onPress={() => { navigation.navigate('Support') }}
                            label="Support"
                            icon={(color, size) =>
                                (
                                    <Icon name="users" size={25} color="#666" />
                                )}
                        />
                    </Drawer.Section>









                    <Drawer.Section title='Preferences'>
                        <TouchableRipple onPress={() => { }} >
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ marginLeft: 18, color: '#666' }}>
                                    Dark Mode
                                </Text>
                                <View pointerEvents='none'>
                                    <Switch style={{ marginLeft: 125 }} value={() => { }} />

                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                </View>


            </DrawerContentScrollView>

            <Drawer.Section style={{}}>

                <DrawerItem
                    style={{ backgroundColor: '#fff', color: '#666' }}
                    // Icon="sign-out-alt"
                    onPress={() => { navigation.navigate('Login') }}
                    label="Sign Out"
                    icon={(color, size) =>
                        (
                            <Icon name="sign-out" size={25} color="#666" />
                        )}
                />
            </Drawer.Section>

        </View>
    )
}
export default DrawerContents