import { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../Styles/Styles';
import { library } from '../Library/library';
import { DetailsStyles } from '../Styles/DetailsStyles';
import { LOCALIPURL } from '@env';

function CharacterDetails({route}) {
  const { selectedName } = route.params;
  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState(true)

  const url = `${LOCALIPURL}:4700/character`

  useEffect(() => {
    const saveData = async () => {
      try {
        const data = await library.getCharacter(url, selectedName).then(a=>a)
        // console.log(data)
        setCharacter(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    saveData()
  }, [])

  if (loading) {
    // Muestra un indicador de carga o algún otro componente
    return (
      <View style={styles.container}>
        <Text style={styles.textWhite}>Cargando datos del personaje</Text>
      </View>
    )
  }
  
  if (!character || character.length === 0) {
    // Muestra un mensaje indicando que no hay datos disponibles
    return (
      <View style={styles.container}>
        <Text style={styles.textWhite}>No hay datos disponibles</Text>
        <Text style={styles.textWhite}>Vuelva a recargar la app</Text>
      </View>
    )
  }

  return (
      <ScrollView contentContainerStyle={DetailsStyles.scrollContainer}>
        <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text><Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text><Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text><Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text><Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
    {/* <View style={styles.container}>
        
          <Image style={DetailsStyles.FullBodyImage} source={{uri: character.Gallery.Category.CharacterGallery.FullBody}}/>
        
        <View>
          <Text style={[styles.textWhite, {marginTop: '10%'}]}>
              {character.Name}
          </Text>
        </View>
        <View style={DetailsStyles.containerData}>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
          <Text style={styles.textWhite}>Características</Text>
        </View>
    </View> */}
      </ScrollView>
  );
}

export default CharacterDetails;