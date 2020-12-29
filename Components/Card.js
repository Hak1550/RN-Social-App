import React from 'react';
import {
    PostTime,
    Cards,
    UserImg,
    UserInfo,
    UserText,
    UserTextDetails,
    PostImage,
    PostText,
    InteractionButton,
    CardLower,
    CardUpper,
    Slider
} from '../Styles/Home'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';


const Card = ({ item }) => {
    return (
        <Cards>
            <CardUpper>
                <UserInfo>
                    <UserImg source={item.userImg} />
                    <UserTextDetails>
                        <UserText>{item.userName}</UserText>
                        <PostTime>{item.postTime}</PostTime>
                    </UserTextDetails>
                </UserInfo>
                <PostText>
                    {item.postText}    </PostText>
            </CardUpper>
            {item.postImg != 'none' ? <PostImage source={item.postImg} /> : <Slider />}
            <CardLower>
                <InteractionButton >
                    <Icon name='heart' size={20} color='#1976D2' />
                    <Text style={{ color: '#1976D2', marginLeft: 5 }}>{item.liked} Likes</Text>
                </InteractionButton>
                <InteractionButton >
                    <Icon name='comment' size={20} color='#1976D2' />
                    <Text style={{ color: '#1976D2', marginLeft: 5 }}>{item.comment} Comments</Text>
                </InteractionButton>
            </CardLower>

        </Cards>


    )
}

export default Card;

