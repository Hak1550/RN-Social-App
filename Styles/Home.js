import styled from 'styled-components';



export const Container = styled.View`
justify-content: center;
align-items: center;
flex: 1;
margin-top:50px;
`;

export const Header = styled.View`
background-color: #1976D2;
flex: 5;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
padding:10px;
position: absolute;
top: 0;
margin-bottom:50px;
`;
export const CardsContainer = styled.View`
flex: 9;
width:100%;
`;
export const Cards = styled.View`
width: 100%;
padding-top: 10px;
padding-bottom: 10px;
border-radius:5px;
`;

export const CardUpper = styled.View`
background-color: #6662;
width:95%;
justify-content: center;
align-items: center;
margin: auto;
border-top-left-radius:5px;
border-top-right-radius:5px;
`;
export const UserInfo = styled.View`
flex-Direction: row;
justify-content : flex-start;
align-items: flex-start;
width: 100 %;
margin-top:10px;
`;

export const UserImg = styled.Image`
width: 40px;
height: 40px;
border-radius: 25px;
margin-left: 20px; `;

export const UserTextDetails = styled.View`
flex-direction: column;
;`;

export const UserText = styled.Text`
font-size: 15px;
margin-left: 10px;
font-weight: bold;
`;

export const PostTime = styled.Text`
font-size: 14px;
margin-left: 10px;
color: #666;
`;
export const Slider = styled.View`
width:95%;
margin: auto;
border-bottom-color:#6665;
border-bottom-width:1px;
`;


export const PostText = styled.Text`
justify-content: center;
align-items: center;
margin: auto;
margin-top: 10px;
width: 90%;
margin-bottom:10px`;

export const PostImage = styled.Image`
width: 100%;
margin: auto;
height: 250px;
`;
export const CardLower = styled.View`
background-color: #6662;
width:95%;
justify-content: center;
align-items: center;
margin: auto;
justify-content: space-around;
flex-direction: row;
margin-bottom: 0px;
padding:10px;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
`;

export const InteractionButton = styled.TouchableOpacity`
flex-direction: row;
padding:5px 10px;
background-color: ${props => props.active ? '#6663' : 'transparent'};
color: ${props => props.active ? '#1976D2' : '#666'};

`;

