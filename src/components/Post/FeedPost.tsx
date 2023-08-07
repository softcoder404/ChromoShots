import React, { useState }  from "react";
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
import CustomPressable from "../CustomPressable";
import Carousel from "../Carousel";

type IFeedPostProps = {
    post: IPost
    isVisible: boolean,
}



const FeedPost =({post,isVisible}: IFeedPostProps) => {
    const [showMore,setShowMore] = useState(false);
    const [likedPostIds,setLikedPostIds] = useState<string[]>([]);

    const toggleShowMore = ()=>{
        setShowMore(initialState => !initialState);
    }

    const handleSetLikedPost = (postId: string)=> {
        setLikedPostIds(array => {
            const exists = array.includes(postId)
        if (exists) {
            const tempList = array.filter((id) =>  id !== postId );  
            return [...tempList]; 
        } else {
            const tempList = array
            tempList.push(postId)
            return [...tempList];
        }
        });
    }

    let content = null;
    let medias: string[] = [...post.images ?? [], ...post.videos ?? []];
    medias.sort();
    if(medias.length > 0){
       content = <Carousel isVisible={isVisible} onDoubleTap={()=> handleSetLikedPost(post.id as string)} medias={medias} />
    }
    else{
        content = (
           <CustomPressable onDoubbleTab={ ()=> handleSetLikedPost(post.id as string)}>
             <Image source={{uri: post.image}} style= {styles.image}/>
           </CustomPressable>
        );
    }
   
    

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
            {content}
      

            {/* Footer */}
            <View style = { styles.footer}>
                <View style = {styles.iconContainer}>
                   <CustomPressable onPress={ ()=> handleSetLikedPost(post.id as string)}>
                     <AntDesign name = {likedPostIds?.includes(post.id as string) ? 'heart': 'hearto' }  size={ 24 }  style = {{...styles.icon,color: likedPostIds?.includes(post.id as string) ? colors.red : colors.black }}/>
                    </CustomPressable>
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
                <Text style = {styles.text} numberOfLines={showMore ? 0 : 2}>
                    <Text style = {styles.bold} >{post.user.username} </Text>
                    {post.description}
                </Text>
                <Text style={styles.greyText} onPress={ toggleShowMore } >View More</Text>

                 {/* Comments */}
                 <Text style = {{paddingTop: 5, color: colors.grey, fontWeight: font.weight.bold}}>View all {post.nofComments} comments</Text>
                 {post.comments.map(item =>(
                     <Comment key= {item.id} comment= {item} />
                ))}
                {/* Posted Date */}
                <Text style = {styles.greyText}>{post.createdAt}</Text>
                

            </View>

       </SafeAreaView>
    );
}

export default FeedPost;