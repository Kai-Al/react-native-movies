import { StyleSheet } from 'react-native';
import { ColorPalette } from '../constants';

export const posterStyles = StyleSheet.create({
    container: {
        width: 220,
        height: 500,
        borderWidth: 10,
        borderColor: ColorPalette.PRIMARY,
        backgroundColor: ColorPalette.PALE,
        marginBottom: 'auto',
        marginTop: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        color: ColorPalette.PRIMARY,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
    },
});