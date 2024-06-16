import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTSIZE } from "../../../contants/theme";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    body: {
        flex: 0.5,
    },
    footer: {
        flex: 2,
        flexDirection: "column",
    },
    logoImage: {
        width: windowWidth / 3,
        height: windowHeight / 3,
        alignSelf: 'center',
    },
    brandName: {
        color: COLORS.orange,
        fontSize: FONTSIZE.big,
        alignSelf: 'center',
    },
    addButton: {
        width: windowWidth / 1.2,
        height: windowHeight / 14,
        backgroundColor: COLORS.green,
        borderRadius: 10,
        alignSelf: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: FONTSIZE.medium,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: '5%',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default styles;