import {StyleSheet, Dimensions} from 'react-native';
import { COLORS, FONTSIZE } from "../../../contants/theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.darkGreen,
      },
      branchName: {
        fontSize: FONTSIZE.medium,
        fontWeight: 'bold',
      },
});

export default styles;