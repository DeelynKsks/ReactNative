import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      borderRadius: 140,
      marginTop: 20,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageMain: {
      width: 350,
      height: 330
    },
    text: {
        fontFamily: 'Bloodcrowc',
        fontSize: 40,
        color: '#000000'
    },
    button: {
      width: 30,
      height: 10
    }
  });

// Código para cargar fuentes
export const loadCustomFonts = async() => {
  await Font.loadAsync({
    'Bloodcrowc': require('@assets/Fonts/bloodcrowc.ttf'),
  });
}