import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { IPost } from '../../types/PostModel'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import colors from '../../theme/colors';


interface IFeedGridItem {
    post: IPost;
}
const FeedGridItem = ({post}:IFeedGridItem) => {
    const imageUrl = post.image || post.images![0];
  return (
    <View style={styles.gridItem}>
        <Image key={post.id} style={{flex:1}} source={{uri:imageUrl}}/>
        {post.images && 
        <MaterialIcons size={18} name={"collections"} style={styles.icon}/>}
    </View>
  )
}

const styles = StyleSheet.create({
    gridItem: {
        width: '32.85%',
        aspectRatio: 1,
        margin: 1,
    },
    icon:{
        position: 'absolute',
        right: 5,
        top: 5,
        color: colors.white,
    }
});

export default FeedGridItem