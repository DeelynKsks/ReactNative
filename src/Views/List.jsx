import React, { useEffect, useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import { styles } from './../Styles/Styles';
import { library } from './../Library/library';
import {LOCALIPURL} from '@env'
import Icon from 'react-native-vector-icons/FontAwesome';
// import ColumnSelector from './../Components/ColumnSelector';
import Card from '../Components/Card';
// import { useNavigation } from '@react-navigation/native';
// import { gridStyles } from '../Styles/CardStyles';

function List() {

  // const navigation = useNavigation();

  const [ dataApi, setDataApi ] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');
  // const [ columns, setColumns ] = useState(2)
  const [loading, setLoading] = useState(true)
  const url = `${LOCALIPURL}:4700/getAll`
  
  
  // const url = 'https://demon-slayer-api.onrender.com/v1'

  // const handleColumnSelect = (selectedColumns) => {
  //   setColumns(selectedColumns)
  // }

  const handleSearch = (text) => {
    setSearchText(text);
    filterData(text);
  };

  const filterData = (text) => {
    const filtered = dataApi.filter((item) =>
      item.Name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered.length > 0 ? filtered : []);
  };

  const handleDeleteCard = (id) => {
    // Elimina la tarjeta con el ID correspondiente del estado
    setDataApi((prevData) => prevData.filter((card) => card._id !== id));
    setFilteredData((prevData) => prevData.filter((card) => card._id !== id));
  };

  const handleCardPress = (selectedName) => {
    // Realizar acciones específicas al presionar la tarjeta
    console.log(`Presionaste la tarjeta: ${selectedName}`);
  };

  const renderItem = ({ item }) => {    
    return(
      <Card
      data={item}
      // onDeleteFiltered={handleDeleteFiltered} // Asegúrate de pasar onDeleteFiltered aquí
      onDelete={handleDeleteCard}
      onPress={handleCardPress}/>
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
        <View style={styles.inputContainer}>
          <TextInput
            color='white'
            style={styles.searchInput}
            placeholder="Buscar personaje"
            placeholderTextColor="gray"
            value={searchText}
            onChangeText={handleSearch}
            // renderLeftAccessory={() => (
            //   <Icon name="search" size={18} color="white" />
            // )}
          />
          
        </View>
          {/* <ColumnSelector onSelect={handleColumnSelect}/> */}
          <FlatList
            data={filteredData.length > 0 ? filteredData : dataApi}
            renderItem={renderItem}
            // key={dataApi}
            numColumns={2}
            keyExtractor={(item) => item._id}
            contentContainerStyle={styles.flatListContent}
          >

          </FlatList>
          {/* <View style={styles.cardContainer}>
          {dataApi.map((item) => (
            <Card
              key={item._id}
              data={item}
              onDelete={handleDeleteCard}
              onPress={handleCardPress}
            />
          ))}
          </View> */}
    </View>
  )
}

export default List