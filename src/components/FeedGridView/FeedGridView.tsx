import { FlatList } from 'react-native'
import React from 'react'
import { IPost } from '../../types/PostModel'
import FeedGridItem from './FeedGridItem';

interface IFeedGridView{
    data?: IPost[];
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined;
}

const FeedGridView = ({data = [],ListHeaderComponent}:IFeedGridView) => {
  return (
    <FlatList 
        data={data}
        renderItem={({item})=> <FeedGridItem post={item}/>}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
      />
  )
}

export default FeedGridView