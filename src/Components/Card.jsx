import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native';
import { cardStyles } from '../Styles/CardStyles';
import { library } from '../Library/library';

function Card(props) {

    const {data} = props
  return (
    <TouchableOpacity style={cardStyles.card}>
        <Image style={cardStyles.image} source={{uri: library.extractImage(data.image)}}/>
        <Text style={cardStyles.name}>{data.name}</Text>
    </TouchableOpacity>
  )
}

export default Card