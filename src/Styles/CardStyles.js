import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';

const windowWidth = Dimensions.get('window').width;

export const cardStyles = ScaledSheet.create({
    cardContainer: {
      width: moderateScale(180),
      marginHorizontal: moderateScale(10),
      borderRadius: moderateScale(8),
      backgroundColor: '#000000',
      padding: moderateScale(10),
      alignItems: 'center',
      borderWidth: moderateScale(4),
      borderColor: '#ffffff',
      // width: windowWidth * 0.45, // Ajusta el ancho de las tarjetas al 45% del ancho de la pantalla
      // marginHorizontal: windowWidth * 0.025, // Agrega un margen horizontal al 2.5% del ancho de la pantalla
      marginTop: '5@s', // Espaciado entre las tarjetas
      marginBottom: '5@s'
      // marginLeft: moderateScale(10),
      // marginRight: moderateScale(10),
    },
    cardImage: {
      width: '100%',
      height: moderateScale(150),
      borderRadius: moderateScale(8),
      marginBottom: moderateScale(10),
    },
    name: {
      fontFamily: 'Bloodcrowc',
      fontSize: moderateScale(18),
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