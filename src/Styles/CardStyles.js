import { StyleSheet } from 'react-native';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
export const cardStyles = ScaledSheet.create({
    cardContainer: {
      borderRadius: '8@s',
      backgroundColor: '#000000',
      padding: '10@s',
      margin: '5@s',
      alignItems: 'center',
      borderWidth: 4,
      borderColor: '#ffffff'
    },
    cardImage: {
      width: '100%',
      height: '150@s',
      borderRadius: '8@s',
      marginBottom: '10@s',
    },
    name: {
      fontFamily: 'Bloodcrowc',
      fontSize: moderateScale(20),
      padding: moderateScale(8),  
      // marginVertical: 10,
      // textAlign: 'center',
      color: '#ffffff'
    },
    // Agrega otros estilos necesarios para los demás elementos de la card
  });

// export const columnStyles = StyleSheet.create({
//     container: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       marginBottom: 16,
//     },
//     button: {
//       paddingHorizontal: 16,
//       paddingVertical: 8,
//       marginHorizontal: 8,
//       borderWidth: 1,
//       borderColor: '#ddd',
//       borderRadius: 8,
//     },
//     selected: {
//       backgroundColor: '#ddd',
//     },
//     buttonText: {
//       fontFamily: 'Bloodcrowc',
//       fontSize: 14,
//       color: '#ffffff'
//     },
//   });

// export const gridStyles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingHorizontal: 16,
//         paddingTop: 16,
//         backgroundColor: '#000000',
//         justifyContent: 'center',
//         alignItems: 'center'
//       },
//       listContainer: {
//         flexGrow: 1,
//       },
// })