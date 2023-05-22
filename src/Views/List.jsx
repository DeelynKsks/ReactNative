import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from './../Styles/Styles';
import { library } from './../Library/library';

function List() {

  const [ dataApi, setDataApi ] = useState([])

  const url = 'https://demon-slayer-api.onrender.com/v1/'

  const renderItem = ({ item }) => {    
    return(
      <Text style={styles.textWhite}>
        {item.name}
      </Text>
    )
  }

  useEffect(() => {
    const saveData = async () => {
      const data = await library.getData(url)

      setDataApi(data)
    }

    saveData()
  }, [])

  return (
    <View style={styles.container}>
        <FlatList data={dataApi} renderItem={renderItem}>

        </FlatList>
    </View>
  )
}

export default List