import {StyleSheet, Dimensions} from 'react-native';
import { COLORS, FONTSIZE } from "../../../contants/theme";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    body: {
        flex: 3,
        flexDirection: "column",
        justifyContent: 'center'
    },
    footer: {
        flex: 2,
    },
    logoImage: {
        width: windowWidth/ 3,
        height: windowHeight/ 3,
        alignSelf: 'center',
    },
    brandName: {
        color: COLORS.orange,
        fontSize: FONTSIZE.big,
        alignSelf: 'center',
    },
    input: {
        width: windowWidth/ 1.2,
        height: windowHeight/ 15,
        backgroundColor: "white",
        alignSelf: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.green,
        margin: '5%',
        fontSize: FONTSIZE.medium,
        padding: '5%',
        color: "black",
    },
    sendButton: {
        width: windowWidth/ 1.2,
        height: windowHeight/ 14,
        backgroundColor: COLORS.green,
        alignSelf: 'center',
        margin: '5%',
        padding: '5%',
        borderRadius: 50,
        alignItems: 'center',
    },
    sendButtonText: {
        fontSize: FONTSIZE.medium
    }
});

export default styles;