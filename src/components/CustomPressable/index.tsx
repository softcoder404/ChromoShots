import { Pressable } from 'react-native'
import { ReactNode } from 'react'

type CustomPressableProps  = {
    children: ReactNode,
    onDoubbleTab?: () => void,
    onPress?: () => void,
    onDoubleTapDebounceDelay?: number 
};
const CustomPressable = (props : CustomPressableProps) => {
    let onLastPress = 0;
    let debounceTimer = props.onDoubleTapDebounceDelay ?? 500 //default to 500 millis if null
    const handleAllCallbackTap = () => {
        if(Date.now() - onLastPress < debounceTimer){
            if(props.onDoubbleTab != null) props.onDoubbleTab();
        }
        if(props.onPress != null) props.onPress();
        onLastPress = Date.now();
    }
  return (
    <Pressable onPress={ handleAllCallbackTap } >
      {props.children}
    </Pressable>
  )
}

export default CustomPressable