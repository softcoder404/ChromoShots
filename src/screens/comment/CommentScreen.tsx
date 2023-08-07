import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import comments from "../../assets/data/comments.json";
import Comment from '../../components/Comment/Comment';
import { IComment } from '../../types/PostModel';

import { SafeAreaView } from 'react-native';
import CommentBottomTextInputCard from './components/CommentBottomTextInputCard';

const CommentScreen = () => {
  return (
    <SafeAreaView style={styles.scaffold}>
        <FlatList 
            style={{padding: 15}}
            data={comments as IComment[]}
            renderItem={({item}) => <Comment  key={item.id} includeDetails={true} comment={item}/>}
        />
        <CommentBottomTextInputCard />
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    scaffold: {
        flex: 1,
    },
   
   
});

export default CommentScreen