import { StyleSheet, View, useWindowDimensions } from 'react-native'
import React, { LegacyRef, useRef, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import CustomPressable from '../CustomPressable';
import colors from '../../theme/colors';
type VideoPlayerProps = {
    uri: string,
    paused: boolean,
}

const VideoPlayer = ({uri, paused}:VideoPlayerProps) => {
    const screenSize = useWindowDimensions();
    const [muted,setMuted] = useState(true)
    const toggleMuteVolume = ()=> {
        setMuted((state)=> !state)
    }
  return (
     <View>
        <Video 
            source={{uri: uri}} 
            playInBackground
            style={{width: screenSize.width,aspectRatio:1}}
            resizeMode= 'cover'
            repeat
            paused= {paused}
            muted={muted}
            onProgress={(data)=>{
            }}
            onVideoError={()=>{}}                                    
        />

       <CustomPressable onPress={ toggleMuteVolume }>
            <Ionicons 
                name={muted ? 'volume-mute':'volume-high'}
                size={18}
                style={styles.muteIcon}/>
       </CustomPressable>
     </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
    muteIcon: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 4,
        color: colors.black,
    }
});
