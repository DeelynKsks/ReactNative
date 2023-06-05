import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { styles } from '../Styles/Styles';
function CoolButton(props) {

  const { title, action, textIcon, styleProps, styleIconProps } = props

  return (
    <View>
        <TouchableOpacity onPress={action}>
            <LinearGradient
            style={styleProps}
            colors={['#ffffff', '#ee1c25', '#ffffff']}
            start={{x: 0, y: 2}}
            end={{x: 0, y: 0}}
            >
              <View style={styles.TextTogether}>
                <Text style={styles.text}>
                    {title}
                </Text>
                <Text style={styleIconProps}>
                  {textIcon}
                </Text>
              </View>
            </LinearGradient>
        </TouchableOpacity>
    </View>
  )
}

export default CoolButton