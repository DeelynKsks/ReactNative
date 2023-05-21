import React from 'react'
import { View, Image } from 'react-native';
import CoolButton from './../Components/CoolButton';
import knyLogo from '../Images/5ede4a3fb760540004f2c5e9.png'
import { styles } from '../Styles/Styles';

function Home() {
  return (
    <View>
        <Image style={styles.imageMain} source={knyLogo}/>
        <CoolButton/>
    </View>
  )
}

export default Home