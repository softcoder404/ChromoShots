import { TextStyle } from "react-native";

const size = {
    xs: 10,
    small: 12,
    default: 14,
    md: 16,
    lg: 18,
    xlg: 22,
    xxlg:32,
}

const weight: {[key:string] : TextStyle['fontWeight'] } = {
    strong: '900',
    semi: '700',
    bold: 'bold',
    normal: 'normal',
    'thin': '400',
}

export default {size, weight};