import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageMain: {
      width: 350,
      height: 330
    },
    text: {
        fontFamily: 'Bloodcrowsc',
        fontSize: 100,
        color: '#ffffff'
    }
  });

// Código para cargar fuentes
export const loadCustomFonts = async() => {
  await Font.loadAsync({
    'Bloodcrowsc': require('@assets/Fonts/bloodcrowsc.ttf'),
  });
}