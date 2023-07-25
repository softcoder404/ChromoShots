import { FlatList, Text } from 'react-native';
import posts from '../../assets/data/posts.json';
import FeedPost from '../../components/Post';
import { IPost } from '../../types/PostModel';

const HomeScreen = () => {

  return (
    <FlatList 
    data= {posts as IPost[]} 
    renderItem={({item})=>  <FeedPost key={item.id} post={item}/> }
    showsVerticalScrollIndicator = {false}
     />
  )
}

export default HomeScreen