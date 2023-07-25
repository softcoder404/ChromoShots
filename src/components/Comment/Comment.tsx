import React from "react";
import { Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "../Post/styles";
import { IComment } from "../../types/PostModel";


type ICommentProps = {comment: IComment}

const Comment = ({comment}:ICommentProps) => {
    return (
        <View style = {styles.comment}>
            <Text style = {styles.commentText}>    
                <Text style = {styles.bold}>{comment.user.username} </Text>
                {comment.comment}
            </Text>
            <AntDesign name="hearto" size={14} style= {styles.icon} />
        </View>
    );
}

export default Comment;