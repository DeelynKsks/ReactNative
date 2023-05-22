import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { ScaledSheet } from 'react-native-size-matters';
export const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      borderRadius: '140@s',
      marginTop: '20@s',
      height: '50@s',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '30@s',
      paddingRight: '30@s'
    },
    imageMain: {
      width: '250@s',
      height: '230@s',
      marginTop: '140@s'
    },
    text: {
        fontFamily: 'Bloodcrowc',
        fontSize: '40@s',
        color: '#000000'
    },
    button: {
      width: '30@s',
      height: '10@s'
    }
  });

// Código para cargar fuentes
export const loadCustomFonts = async() => {
  await Font.loadAsync({
    'Bloodcrowc': require('@assets/Fonts/bloodcrowc.ttf'),
  });
}