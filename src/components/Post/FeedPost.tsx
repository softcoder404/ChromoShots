import React  from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { IPost } from "../../types/PostModel";
import styles from "./styles";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../../theme/colors";


const FeedPost =() => {
    return (
       <SafeAreaView style = { styles.post }>
            {/* Header */}
            <View style = {styles.header}>
                <Image source= {{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
                }} style = {styles.userAvatar}/>
                <Text>AbdulHameed</Text>
                <Entypo name = 'dots-three-horizontal' style = {styles.threeDots}/>
            </View>
            {/* Content */}
            <Image source={{
                uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
            }} 
            style = { styles.image} 
            />
            {/* Footer */}
            <View style = { styles.footer}>
                <View style = {styles.iconContainer}>
                    <AntDesign name = 'hearto' size={ 24 } style = {styles.icon}/>
                    <Ionicons name = 'chatbubble-outline' size={ 24 } style = {styles.icon}/>
                    <Feather name = 'send' size={ 24 } style = {styles.icon}/>
                    <Feather name = 'bookmark' size={ 24 } style = {{marginLeft: 'auto'}}/>
                </View>
                {/* Likes */}
                <Text style = {styles.text}>
                    Liked by
                    <Text style = {styles.bold}> GeekyAdams </Text>and
                    <Text style = {styles.bold}> 345 others </Text>
                </Text>
                {/* Post Description */}
                <Text style = {styles.text}>
                    <Text style = {styles.bold} >AbdulHameed </Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, 
                    expedita tempore provident magni voluptatum, blanditiis iste dolorem 
                    excepturi accusantium recusandae at dolore illo? Aut aliquam doloribus, 
                    id culpa nisi nihil.
                </Text>

                 {/* Comments */}
                 <Text style = {{paddingTop: 5, color: colors.grey, ...styles.bold}}>View all 16 comments</Text>
                 <View style = {styles.comment}>
                    <Text style = {styles.commentText} >Learning react native can be funfill with rightful resources </Text>
                    <AntDesign name="hearto" size={ 14 }/>
                </View>
                
                {/* Posted Date */}
                <Text style = {{color: colors.grey}}>July 23, 2023</Text>


            </View>

       </SafeAreaView>
    );
}

export default FeedPost;