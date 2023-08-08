import { FlatList } from 'react-native';
import posts from '../../assets/data/posts.json';
import FeedPost from '../../components/Post';
import { IPost } from '../../types/PostModel';
import { useRef, useState } from 'react';
import OnViewableItemsChangedProps from '../../types/OnViewableItemProps';



const HomeScreen = () => {
  const [activePostId,setActivePostId] = useState<string | null>(null)
  const onViewableItemsChanged = ({viewableItems}: OnViewableItemsChangedProps)=>{
    if(viewableItems.length > 0){
      setActivePostId(viewableItems[0].item.id)
    }
  }
  const onViewableItemsChangedRef = useRef(onViewableItemsChanged);
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50 //if more than 70% of the item is on screen consider it visible
}


  return (
    <FlatList 
    data= {posts as IPost[]} 
    renderItem={({item})=>  <FeedPost key={Date.now.toString()} post={item} isVisible = {activePostId === item.id} /> }
    showsVerticalScrollIndicator = {false}
    viewabilityConfig={viewabilityConfig}
    onViewableItemsChanged={ onViewableItemsChangedRef.current }
     />
  )
}

export default HomeScreen