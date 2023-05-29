import { ScaledSheet } from 'react-native-size-matters';

export const DetailsStyles = ScaledSheet.create({
    FullBody: {
        // flex: 1,
        borderRadius: '8@s',
        backgroundColor: '#000000',
        padding: '150@s',
        // margin: '5@s',
        // width: '50@s',
        // height: '50@s',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#ffffff'
    },
    FullBodyImage: {
        // flex: 1,
        // width: '100%',
        // height: '50@s',
        borderRadius: '8@s',
        resizeMode: 'cover'
        // marginBottom: '10@s',
    }
})