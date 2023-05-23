import { StyleSheet } from 'react-native';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
export const cardStyles = StyleSheet.create({
    card: {
      width: '33%', // Para mostrar tres cards en una fila, ajusta este valor según tus necesidades
      aspectRatio: 0.7, // Ajusta el aspectRatio para definir la relación de aspecto de la card
      marginHorizontal: moderateScale(8),
      marginBottom: moderateScale(16),
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: moderateScale(8),
      overflow: 'hidden',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    name: {
      fontFamily: 'Bloodcrowc',
      fontSize: moderateScale(16),
      padding: moderateScale(8),
      textAlign: 'center',
      color: '#ffffff'
    },
    // Agrega otros estilos necesarios para los demás elementos de la card
  });

export const columnStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 16,
    },
    button: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginHorizontal: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
    },
    selected: {
      backgroundColor: '#ddd',
    },
    buttonText: {
      fontFamily: 'Bloodcrowc',
      fontSize: 14,
      color: '#ffffff'
    },
  });

export const gridStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
      },
      listContainer: {
        flexGrow: 1,
      },
})