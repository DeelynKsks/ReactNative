import React from 'react'
import { TouchableOpacity, Text, Image, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { cardStyles } from '../Styles/CardStyles';
import CoolButton from './CoolButton';
import { useNavigation } from '@react-navigation/native';
import { styles } from './../Styles/Styles';

function Card(props) {
    const { data, onDelete, onDeleteFiltered, onPress } = props

    const navigation = useNavigation();

    // const windowWidth = Dimensions.get('window').width;

    const handlePress = () => {
      navigation.navigate('Character', { selectedName: data.Name});
    };

    const handleDelete = () => {
      // Lógica para eliminar la tarjeta
      onDelete(data._id); // Elimina la tarjeta del conjunto de datos completo
      // onDeleteFiltered(data._id); // Elimina la tarjeta del conjunto de datos filtrado (si existe)
    };

  return (
    <TouchableOpacity
      style={[cardStyles.cardContainer]}
      onPress={handlePress}
    >
        <Image style={cardStyles.cardImage} source={{ uri: data.ProfileImage}} />
        <Text style={cardStyles.name}>{data.Name}</Text>
        <CoolButton
          styleProps={styles.container2}
          title={`Eliminar `}
          styleIconProps={styles.textIconTrash}
          textIcon={<Icon name="trash" size={25} color="black" />}
          action={handleDelete}
        />
        
    </TouchableOpacity>
  )
}

export default Card