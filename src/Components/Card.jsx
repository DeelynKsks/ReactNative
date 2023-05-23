import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native';
import { cardStyles } from '../Styles/CardStyles';

function Card(props) {

    const {data} = props
  return (
    <TouchableOpacity style={cardStyles.card}>
        <Image style={cardStyles.image} source={{uri: 'https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/f/f9/Tanjiro_Anime_Profile.png'}}/>
        <Text style={cardStyles.name}>{data.name}</Text>
    </TouchableOpacity>
  )
}

export default Card