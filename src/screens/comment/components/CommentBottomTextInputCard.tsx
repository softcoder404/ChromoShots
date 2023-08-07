import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import fonts from '../../../theme/font';
import colors from '../../../theme/colors';



const CommentBottomTextInputCard = () => {
    const [comment,setComment] = useState('');
    const onPostComment = ()=>{
        console.warn(comment);
        setComment('');
    }
  return (
    <View style={styles.bottomNavBar}>
            <Image 
                style={styles.avatar}
                source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg' }}/>
            <TextInput 
                style = {styles.commentTextInput}
                value= {comment}
                onChangeText={setComment}
                placeholder='write your comment here...'
            />
            <Text onPress={onPostComment} style={styles.textButton} >Post</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    avatar: {
        width: 35,
        aspectRatio: 1,
        borderRadius: 25,
    },
    textButton: {
        fontSize: fonts.size.small,
        fontWeight: fonts.weight.bold,
        color: colors.primary,
    },
    commentTextInput: {
        flex: 1,
        borderColor: colors.white,
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    bottomNavBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderColor: colors.border,
    }
});

export default CommentBottomTextInputCard