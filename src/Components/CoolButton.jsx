import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { styles } from '../Styles/Styles';
function CoolButton(props) {

  const { title, action } = props

  return (
    <View>
        <TouchableOpacity onPress={action}>
            <LinearGradient
            style={styles.container2}
            colors={['#ffffff', '#ee1c25', '#ffffff']}
            start={{x: 0, y: 2}}
            end={{x: 0, y: 0}}
            >
                <Text style={styles.text}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
  )
}

export default CoolButton