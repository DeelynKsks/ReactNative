import { ScaledSheet } from 'react-native-size-matters';

export const DetailsStyles = ScaledSheet.create({
    container: {
        // flex: 1,
        borderRadius: '8@s',
        backgroundColor: '#000000',
        padding: '90@s',
        // margin: '5@s',
        // width: '50@s',
        // height: '50@s',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#ffffff'
    },
    FullBody: {
        // flex: 1,
        borderRadius: '8@s',
        backgroundColor: '#000000',
        padding: '5@s',
        // margin: '5@s',
        // width: '50@s',
        // height: '50@s',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#ffffff'
    },
    FullBodyImage: {
        // flex: 1,
        width: '300@s',
        height: '400@s',
        // borderRadius: '8@s',
        resizeMode: 'cover',
        // borderWidth: 2,
        // borderColor: '#ffffff',
        // marginBottom: '10@s',
    },
    containerData: {
        // flex: 1,
        borderRadius: '8@s',
        backgroundColor: '#000000',
        padding: '90@s',
        // margin: '5@s',
        // width: '50@s',
        // height: '50@s',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#ffffff'
    },
    scrollContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})