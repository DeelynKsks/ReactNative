import React from 'react'
import { View, Image, FlatList } from 'react-native';
import CoolButton from './../Components/CoolButton';
import knyLogo from '../Images/5ede4a3fb760540004f2c5e9.png'
import { styles } from '../Styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function Home(props) {

  const {navigation} = props

  const views = [
    { title: 'List', path: 'List' },
    // { title: 'Character', path: 'Character' }
  ]

  const renderItem = ({ item }) =>
    <CoolButton
      styleProps={[styles.container2, styles.MainButton]}
      title={'Entrar '}
      styleIconProps={styles.textIconArrow}
      textIcon={<Icon style={styles.textIcon} name="chevron-right" size={16} color="black" />}
      action={() => navigation.navigate(item.path)}
      />

  return (
    <View style={styles.container}>
        <Image style={styles.imageMain} source={knyLogo}/>
        <FlatList data={views} renderItem={renderItem}/>
    </View>
  )
}

export default Home