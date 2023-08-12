import {  Text, StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'
import fonts from '../../theme/font'


type ButtonProps = {
    title?: string,
    onPress?: ()=> void,
}
const Button = ({onPress = ()=>{}, title = "Button"}:ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 15,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black,
       
    }
});

export default Button