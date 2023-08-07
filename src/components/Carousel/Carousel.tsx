import { FlatList, Image, StyleSheet, View, ViewToken, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomPressable from '../CustomPressable';
import colors from '../../theme/colors';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import OnViewableItemsChangedProps from '../../types/OnViewableItemProps';


type CarouselProps = {
    medias: string[],
    onDoubleTap: ()=>void,
    isVisible: boolean,
};



const Carousel = ({medias,isVisible,onDoubleTap}:CarouselProps) => {
    const [activeItemIdex,setItemIndex] = useState(0);
    const {width} = useWindowDimensions();
    const viewabilityConfig = {
            itemVisiblePercentThreshold: 50 //if more than 70% of the item is on screen consider it visible
    };
    medias.sort()
    const handleOnViewableItemChanged = useRef(
        ({viewableItems}:OnViewableItemsChangedProps)=>{
            if(viewableItems.length > 0){
                let index = viewableItems[0].index;
            setItemIndex(index ?? 0);
            }
        }
    );
  return (
    <View>
        <FlatList
        horizontal   
        pagingEnabled 
        showsHorizontalScrollIndicator = {false}
        onViewableItemsChanged={handleOnViewableItemChanged.current}
        viewabilityConfig={viewabilityConfig}
        data={medias}
        renderItem={ ({item}) => {
            if(item.includes('.mp4')){
                return (
                    <CustomPressable onDoubbleTab={onDoubleTap}>
                        <VideoPlayer paused={!isVisible} uri = {item}/>
                    </CustomPressable>
                );
            }else{
                return (
                    <CustomPressable onDoubbleTab={onDoubleTap}>
                        <Image source={{uri:item}} style= {{...styles.corouselImageItem,width}} />
                    </CustomPressable>
                );
            }
        }
        }
        />  
        {/* Row Indicators */}
        <View 
            style = {styles.postIndicatorHolder}>
            {medias?.map((_,index)=> <View key={index} style={{backgroundColor: activeItemIdex === index ? colors.white : colors.grey, ...styles.indicator}}/> )}
        </View>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    corouselImageItem: {
        aspectRatio: 1,
    },
    postIndicatorHolder: {
        position: 'relative',
        bottom: 20,  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    indicator:{
        height: 8,
        width: 8,
        marginHorizontal:5,
        borderRadius: 20,
    }
});