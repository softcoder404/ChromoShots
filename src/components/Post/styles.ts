import { StyleSheet } from "react-native";
import fonts from '../../theme/font';
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    post: {

    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userName: {
        fontWeight: fonts.weight.bold,
        color: colors.black
    },
    threeDots: {
        marginLeft: 'auto',
        color: colors.black,
    },
    footer: {
        padding: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    icon: {
        marginHorizontal: 5,
        color: colors.black,
    },
    text: {
        color: colors.black,
        lineHeight: 18,
    },
    greyText: {
        color: colors.grey,
        lineHeight: 16,
    },
    bold: {
        fontWeight: fonts.weight.bold,
        color: colors.black,
    },
    commentText: {
        color: colors.black,
        flex: 1,
        lineHeight: 18,
    },
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 4,
    },


});

export default styles;