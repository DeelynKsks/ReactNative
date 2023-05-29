import React from 'react'
import { TouchableOpacity, Text, Image, View, Dimensions } from 'react-native';
import { cardStyles } from '../Styles/CardStyles';
<<<<<<< HEAD
import CoolButton from './CoolButton';
import { useNavigation } from '@react-navigation/native';

=======
import { library } from '../Library/library';
>>>>>>> f97831842c3ae0bd0d1abae1dfee09d3af905b13

function Card(props) {
    const { data, onDelete, onPress } = props

    const navigation = useNavigation();

    const windowWidth = Dimensions.get('window').width;

    const handlePress = () => {
      navigation.navigate('Character', { selectedName: data.Name});
    };

    const handleDelete = () => {
      // Lógica para eliminar la tarjeta
      onDelete(data.id);
    };

  return (
<<<<<<< HEAD
    <TouchableOpacity
      style={[cardStyles.cardContainer, { width: windowWidth / 2 }]}
      onPress={handlePress}
    >
        <Image style={cardStyles.cardImage} source={{ uri: data.ProfileImage}} />
        <Text style={cardStyles.name}>{data.Name}</Text>
        <CoolButton title={'Eliminar'} action={handleDelete}/>
=======
    <TouchableOpacity style={cardStyles.card}>
        <Image style={cardStyles.image} source={{uri: library.extractImage(data.image)}}/>
        <Text style={cardStyles.name}>{data.name}</Text>
>>>>>>> f97831842c3ae0bd0d1abae1dfee09d3af905b13
    </TouchableOpacity>
  )
}

export default Card