import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from './../Styles/Styles';
import { library } from './../Library/library';
// import ColumnSelector from './../Components/ColumnSelector';
import Card from '../Components/Card';
// import { useNavigation } from '@react-navigation/native';
// import { gridStyles } from '../Styles/CardStyles';

function List() {

  // const navigation = useNavigation();

  const [ dataApi, setDataApi ] = useState([])
  // const [ columns, setColumns ] = useState(2)
  const [loading, setLoading] = useState(true)

<<<<<<< HEAD
  const url = 'http://192.168.1.5:4700/getAll'
=======
  const url = 'https://demon-slayer-api.onrender.com/v1'
>>>>>>> f97831842c3ae0bd0d1abae1dfee09d3af905b13

  // const handleColumnSelect = (selectedColumns) => {
  //   setColumns(selectedColumns)
  // }

  const handleDeleteCard = (id) => {
    // Elimina la tarjeta con el ID correspondiente del estado
    setDataApi((prevData) => prevData.filter((card) => card.id !== id));
  };

  const handleCardPress = (selectedName) => {
    // Realizar acciones específicas al presionar la tarjeta
    console.log(`Presionaste la tarjeta: ${selectedName}`);
  };

  const renderItem = ({ item }) => {    
    return(
      <Card data={item} onDelete={handleDeleteCard} onPress={handleCardPress}/>
    )
  }

  useEffect(() => {
    const saveData = async () => {
      try {
        const data = await library.getData(url).then(a=>a)
  
        setDataApi(data)
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
        <Text style={styles.textWhite}>Cargando</Text>
      </View>
    )
  }
  
  if (!dataApi || dataApi.length === 0) {
    // Muestra un mensaje indicando que no hay datos disponibles
    return (
      <View style={styles.container}>
        <Text style={styles.textWhite}>No hay datos disponibles</Text>
        <Text style={styles.textWhite}>Vuelva a recargar la app</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
        {/* <ColumnSelector onSelect={handleColumnSelect}/> */}
        <FlatList
          data={dataApi}
          renderItem={renderItem}
          // key={dataApi}
          numColumns={2}
          keyExtractor={(item) => item._id}
          // contentContainerStyle={gridStyles.listContainer}
        >

        </FlatList>
    </View>
  )
}

export default List