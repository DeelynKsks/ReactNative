import React from 'react'
import { View, Image, FlatList } from 'react-native';
import CoolButton from './../Components/CoolButton';
import knyLogo from '../Images/5ede4a3fb760540004f2c5e9.png'
import { styles } from '../Styles/Styles';

function Home(props) {

  const {navigation} = props

  const views = [
    { title: 'List', path: 'List' }
  ]

  const renderItem = ({ item }) => <CoolButton title={item.title} action={() => navigation.navigate(item.path)} />

  return (
    <View style={styles.container}>
        <Image style={styles.imageMain} source={knyLogo}/>
        <FlatList data={views} renderItem={renderItem}/>
    </View>
  )
}

export default Home