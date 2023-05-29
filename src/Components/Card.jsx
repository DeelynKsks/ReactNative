import React from 'react'
import { TouchableOpacity, Text, Image, View, Dimensions } from 'react-native';
import { cardStyles } from '../Styles/CardStyles';
import CoolButton from './CoolButton';
import { useNavigation } from '@react-navigation/native';


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
    <TouchableOpacity
      style={[cardStyles.cardContainer, { width: windowWidth / 2 }]}
      onPress={handlePress}
    >
        <Image style={cardStyles.cardImage} source={{ uri: data.ProfileImage}} />
        <Text style={cardStyles.name}>{data.Name}</Text>
        <CoolButton title={'Eliminar'} action={handleDelete}/>
    </TouchableOpacity>
  )
}

export default Card