import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
export const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      borderRadius: '30@s',
      height: '30@s',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '10@s',
      paddingRight: '10@s'
    },
    imageMain: {
      width: '250@s',
      height: '230@s',
      marginTop: '140@s'
    },
    text: {
      fontFamily: 'Bloodcrowc',
      fontSize: '20@s',
      color: '#000000'
    },
    textWhite: {
      fontFamily: 'Bloodcrowc',
      fontSize: '30@s',
      color: '#ffffff'
    },
    button: {
      width: '30@s',
      height: '10@s'
    },
    cardContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
      paddingHorizontal: '10@s',
      marginTop: '10@s',
    },
    flatListContent: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    listContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchInput: {
      height: 30,
      width: 200,
      textAlign: 'center',
      // Otros estilos necesarios
    },
    TextTogether: {
      flexDirection: 'row',
    },
    textIconTrash: {
      marginTop: moderateScale(4)
    },
    textIconArrow: {
      marginTop: moderateScale(9)
    },
    MainButton: {
      marginTop: '20@s',
    },
  });

// Código para cargar fuentes
export const loadCustomFonts = async() => {
  await Font.loadAsync({
    'Bloodcrowc': require('@assets/Fonts/bloodcrowc.ttf'),
    'Bloodcrowsc': require('@assets/Fonts/bloodcrowsc.ttf')
  });
}