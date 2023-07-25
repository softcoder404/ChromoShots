import React  from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { IPost } from "../../types/PostModel";
import styles from "./styles";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../../theme/colors";
import font from "../../theme/font";
import Comment from "../Comment";

type IFeedPostProps = {post: IPost}



const FeedPost =({post}: IFeedPostProps) => {
    return (
       <SafeAreaView style = { styles.post }>
            {/* Header */}
            <View style = {styles.header}>
                <Image source= {{
                    uri: post.user.image
                }} style = {styles.userAvatar}/>
                <Text style= {styles.bold} >{post.user.username}</Text>
                <Entypo name = 'dots-three-horizontal' style = {styles.threeDots}/>
            </View>
            {/* Content */}
            <Image source={{
                uri: post.image
            }} 
            style = { styles.image} 
            />
            {/* Footer */}
            <View style = { styles.footer}>
                <View style = {styles.iconContainer}>
                    <AntDesign name = 'hearto' size={ 24 } style = {styles.icon}/>
                    <Ionicons name = 'chatbubble-outline' size={ 24 } style = {styles.icon}/>
                    <Feather name = 'send' size={ 24 } style = {styles.icon}/>
                    <Feather name = 'bookmark' size={ 24 } style = {{marginLeft: 'auto',...styles.icon}}/>
                </View>
                {/* Likes */}
                <Text style = {styles.text}>
                    Liked by
                    <Text style = {styles.bold}> GeekyAdams </Text>and
                    <Text style = {styles.bold}> {post.nofLikes} others </Text>
                </Text>
                {/* Post Description */}
                <Text style = {styles.text}>
                    <Text style = {styles.bold} >{post.user.username} </Text>
                    {post.description}
                </Text>

                 {/* Comments */}
                 <Text style = {{paddingTop: 5, color: colors.grey, fontWeight: font.weight.bold}}>View all {post.nofComments} comments</Text>
                 {post.comments.map(item =>(
                     <Comment key= {item.id} comment= {item} />
                ))}
                {/* Posted Date */}
                <Text style = {{color: colors.grey}}>{post.createdAt}</Text>
                

            </View>

       </SafeAreaView>
    );
}

export default FeedPost;