import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { IComment } from "../../types/PostModel";
import colors from "../../theme/colors";
import fonts from "../../theme/font";


type ICommentProps = {comment: IComment,includeDetails: boolean}

const Comment = ({comment,includeDetails = false}:ICommentProps) => {
    const [likes,setLikes] = useState(false);
    return (
        <View style = {styles.comment}>
           {includeDetails && 
           <Image style={styles.avatar} source={{uri: comment.user.image}}/>}
            <View style={{ flex: 1,}}>
                <Text style = {styles.commentText}>    
                    <Text style = {styles.bold}>{comment.user.username} </Text>
                    {comment.comment}
                </Text>
                {/* comment footer info */}
                {includeDetails && 
                <View style= {styles.commentFooterInfo}>
                    <Text style={styles.footerText}>2d</Text>
                    <Text style={styles.footerText}>40 Likes</Text>
                    <Text style={styles.footerText}>Reply</Text>
                </View>}
            </View>
            <Pressable onPress={()=>setLikes((_state)=> !_state)} hitSlop={5}>
                <AntDesign name={likes ? "heart" : "hearto"} size={14} style= {{...styles.icon,color: likes ? colors.red : colors.black }} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    comment: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingBottom: 4,
        marginBottom: 5,
    },
    commentFooterInfo: {
        flexDirection: 'row'
    },
    footerText: {
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size.small,
        color: colors.grey,
        paddingRight: 5,
        paddingTop: 5,
    },
    avatar: {
        width: 30,
        aspectRatio: 1,
        borderRadius: 25,
        backgroundColor: colors.border,
        marginRight: 8,
    },
    commentText: {
        color: colors.black,
        lineHeight: 18,
    },
    icon: {
        marginHorizontal: 5,
        color: colors.black,
    },
    bold: {
        fontWeight: fonts.weight.bold,
        color: colors.black,
    },
});

export default Comment;