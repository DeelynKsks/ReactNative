import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from './../Styles/Styles';
import { library } from './../Library/library';
import ColumnSelector from './../Components/ColumnSelector';
import Card from '../Components/Card';
import { gridStyles } from '../Styles/CardStyles';

function List() {

  const [ dataApi, setDataApi ] = useState([])
  const [ columns, setColumns ] = useState(2)
  const [loading, setLoading] = useState(true)

  const url = 'https://demon-slayer-api.onrender.com/v1'

  const handleColumnSelect = (selectedColumns) => {
    setColumns(selectedColumns)
  }

  const renderItem = ({ item }) => {    
    return(
      <Card data={item}/>
    )
  }

  useEffect(() => {
    const saveData = async () => {
      try {
        const data = await library.getData(url)
  
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
    return <Text style={styles.textWhite}>Cargando</Text>;
  }
  
  if (!dataApi || dataApi.length === 0) {
    // Muestra un mensaje indicando que no hay datos disponibles
    return <Text style={styles.textWhite}>No hay datos disponibles</Text>;
  }

  return (
    <View style={gridStyles.container}>
        <ColumnSelector onSelect={handleColumnSelect}/>
        <FlatList
          data={dataApi}
          renderItem={renderItem}
          key={columns}
          numColumns={columns}
          keyExtractor={(item) => item.image}
          contentContainerStyle={gridStyles.listContainer}
        >

        </FlatList>
    </View>
  )
}

export default List