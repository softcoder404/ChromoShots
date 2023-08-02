import { FlatList, Image, StyleSheet, View, ViewToken, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomPressable from '../CustomPressable';
import colors from '../../theme/colors';


type CarouselProps = {
    images: string[],
    videos: string[],
    onDoubleTap: ()=>void,
};

type OnViewableItemsChangedProps = {
    viewableItems: Array<ViewToken>;
    changed: Array<ViewToken>;
  };


const Carousel = ({images,videos,onDoubleTap}:CarouselProps) => {
    const {width} = useWindowDimensions();
    const [activeItemIdex,setItemIndex] = useState(0);
    console.log("rebuild")
    const viewabilityConfig = {
            waitForInteraction: true,
            itemVisiblePercentThreshold: 70 //if more than 70% of the item is on screen consider it visible
    };

    //! Note that onViawableItemsChanged can not be changed when rebuilding, 
    //! So we need to make sure that the function handler does not rebuild
    //! we can make use of useRef to reference the function late
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
        data={images}
        renderItem={ ({item}) =>
        <CustomPressable onDoubbleTab={onDoubleTap}>
            <Image source={{uri:item}} style= {{...styles.corouselImageItem,width}} />
        </CustomPressable> 
        }
        />  
        {/* Row Indicators */}
        <View 
            style = {styles.postIndicatorHolder}>
            {images?.map((_,index)=> <View key={index} style={{backgroundColor: activeItemIdex === index ? colors.white : colors.grey, ...styles.indicator}}/> )}
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